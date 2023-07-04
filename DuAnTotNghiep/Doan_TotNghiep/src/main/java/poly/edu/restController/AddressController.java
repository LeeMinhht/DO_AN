package poly.edu.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;
import poly.edu.dto.AddressDto;
import poly.edu.model.Address;
import poly.edu.model.Brand;
import poly.edu.service.AddressService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/address")

public class AddressController {
    @Autowired
    private AddressService addressService;

    @GetMapping("/findAll")
    public List<Address> findAll(){
        return addressService.findAll();
    }

    @GetMapping("/findTop4")
    public List<AddressDto> findTop4Address(){
        return addressService.findTop4Address(PageRequest.of(0,4));
    }

    @GetMapping("/findById/{addressId}")
    public Optional<Address> findById(@PathVariable("addressId")Integer addressId){
        return addressService.findById(addressId);
    }

}
