package poly.edu.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import poly.edu.model.Comment;
import poly.edu.model.Customer;
import poly.edu.service.CommentService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/comments")
public class CommentController {

    @Autowired
    CommentService commentService;

    @GetMapping("/findByVehicleId/{vehicleId}")
    public List<Comment> findByVehicleId(@PathVariable("vehicleId")Integer vehicleId){
        return commentService.findCommentByVehicleId(vehicleId);
    }
    @PostMapping("/add")
    public Comment create(@RequestBody Comment comment){
        return commentService.saveAndFlush(comment);
    }

}
