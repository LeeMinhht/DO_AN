package poly.edu.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import poly.edu.dto.HireDto;
import poly.edu.dto.RevenueDto;
import poly.edu.dto.TopRentedVehicleDTO;
import poly.edu.dto.VehicleRevenue;
import poly.edu.model.HireVehicle;
import poly.edu.model.Vehicle;
import poly.edu.service.HireVehicleService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("hireVehicle")
public class HireRestController {
    @Autowired
    HireVehicleService hireVehicleService;

    @PostMapping("/add")
    public HireVehicle create(@RequestBody HireVehicle hireVehicle){
        return hireVehicleService.save(hireVehicle);
    }

    @GetMapping("/top-rented-vehicles")
    public ResponseEntity<List<TopRentedVehicleDTO>> getTopRentedVehicles() {
        List<TopRentedVehicleDTO> topVehicles = hireVehicleService.findTopRentedVehicles();

        if (topVehicles.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(topVehicles);
        }
    }

    @GetMapping("/findById/{hireId}")
    public Optional<HireVehicle> findById(@PathVariable("hireId") Integer hireId){
        return hireVehicleService.findById(hireId);
    }

    @GetMapping("/findHireByCusUsername/{cusUsername}")
    public List<HireVehicle> findHireByCusUsername(@PathVariable("cusUsername") String username){
        return hireVehicleService.findHireVehicleBycusUsername(username);
    }

    @GetMapping("/revenue")
    public List<RevenueDto> revenue(){
        return hireVehicleService.getRevenueStatistics();
    }

    @GetMapping("/revenueByMonth/{month},{storeId}")
    public List<VehicleRevenue> revenueByMonth(@PathVariable("month") Integer month, @PathVariable("storeId") Integer storeId){
        return hireVehicleService.getRevenueByMonth(month,storeId);
    }

    @GetMapping("/getRevenueVehicle/{storeId}")
    public List<VehicleRevenue> getRevenueVehicle(@PathVariable("storeId") Integer storeId){
        return hireVehicleService.getRevenueVehicle(storeId);
    }

    @GetMapping("/findHistoryByCusUsername/{cusUsername},{status}")
    public List<HireDto> findHistoryByCusUsername(@PathVariable("cusUsername") String username, @PathVariable("status") Boolean status){
        return hireVehicleService.findHistoryHireByCusUsername(username,status);
    }


    @GetMapping("/countHire")
    public ResponseEntity<?> countHire() {
        List<HireVehicle> hireVehicles = hireVehicleService.findAll();
        int count = hireVehicleService.findAll().size();
        return new ResponseEntity<>(count, HttpStatus.OK);
    }
    @GetMapping("/findByStatusAccept/{storeId}")
    public List<HireVehicle> findByStatusAccept(@PathVariable("storeId")Integer storeId){
        return hireVehicleService.getByStatusAcceptAndStoreId(false,storeId);
    }
    @DeleteMapping("/deleteById/{hireId}")
    public void  deleteById(@PathVariable("hireId") Integer hireId){
        hireVehicleService.deleteById(hireId);
    }
    @PutMapping("/updateHireById/{hireId}")
    public HireVehicle updateById(@PathVariable("hireId")Integer hireId,@RequestBody HireVehicle hireVehicle){
        return hireVehicleService.save(hireVehicle);

    }

    @GetMapping("/getAll")
    public List<HireVehicle> getAll(){
        return hireVehicleService.findAll();
    }

}
