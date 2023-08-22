package poly.edu.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import poly.edu.model.Notification;
import poly.edu.model.Store;
import poly.edu.service.NotificationService;

import java.security.PublicKey;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/notifications")
public class NoificationController {

    @Autowired
    NotificationService notificationService;

    @GetMapping("/findAll")
    public List<Notification> findAll(){
        return notificationService.findAll();
    }


    @GetMapping("/findByUsername/{cusUsername}")
    public List<Notification> findByUsername(@PathVariable("cusUsername") String username){
        if(username == null){
            return  null;
        }
        return notificationService.findAllByCustomer_CusUsername(username);
    }

    @PostMapping("/add")
    public Notification save(@RequestBody Notification notification){
        return notificationService.saveAndFlush(notification);
    }

}
