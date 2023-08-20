package poly.edu.restController.AuthController;



import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import poly.edu.configuration.common.DuplicateEntryException;
import poly.edu.configuration.common.LoginDto;
import poly.edu.configuration.common.ResponseObject;
import poly.edu.configuration.jwt.JwtProvider;
import poly.edu.model.Customer;
import poly.edu.model.User;
import poly.edu.service.CustomerService;
import poly.edu.service.UserService;

import java.util.*;


@RestController
@RequestMapping("api/v1/public")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
    @Autowired
    JwtProvider jwtProvider;

    @Autowired
    UserService adminService;
    @Autowired
    CustomerService service;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @PostMapping("/register")
    public ResponseEntity<ResponseObject> register(@RequestBody() @Validated Customer dto) throws DuplicateEntryException {
        Customer user = new Customer();
        if(service.findByCusUsername(dto.getCusUsername()) != null) {
            throw new DuplicateEntryException("user", dto.getCusUsername() + " is already exits");
        }
        BeanUtils.copyProperties(dto, user);
        //confirm password
//        user.setStatus(Constant.USER_STATUS_ACTIVATED);
//        if (!dto.getUserPass().equals(dto.getPasswordConfirmation()))
//            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(
//                    new ResponseObject(Constant.RESPONSE_STATUS_UNPROCESSABLE_ENTITY, "Password not same", ""));

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("Sucess", "", service.save(user)));
    }

    @PostMapping("user-login")
    public ResponseEntity<ResponseObject> customerLogin(@RequestBody LoginDto login){
        Customer user = service.findByCusUsername(login.getUsername());
        if(user != null){
            if (passwordEncoder.matches(login.getPassword(), user.getPassword())){
                String token = jwtProvider.generateTokenLoginUser(login.getUsername());
                Map<String,Object> infor = new HashMap<>();
                infor.put("token",token);
                infor.put("user",user);
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("Success",
                        "login  successfully",infor));
            }


            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(
                    new ResponseObject("ERROR", "password is incorrect", ""));
        }
        return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(
                new ResponseObject("ERROR", "username not found", ""));

    }
    @PostMapping("admin-login")
    public ResponseEntity<ResponseObject> adminLogin(@RequestBody LoginDto login){
        User admin = adminService.findByUsername(login.getUsername());
        if(admin != null){
            if (passwordEncoder.matches(login.getPassword(), admin.getPassword())){
                String token = jwtProvider.generateTokenLoginAdmin(login.getUsername());
                Map<String,Object> infor = new HashMap<>();
                infor.put("token",token);
                infor.put("user",admin);
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("Success",
                        "login  successfully",infor));
            }


            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(
                    new ResponseObject("ERROR", "password is incorrect", ""));
        }
        return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(
                new ResponseObject("ERROR", "username not found", ""));

    }
}