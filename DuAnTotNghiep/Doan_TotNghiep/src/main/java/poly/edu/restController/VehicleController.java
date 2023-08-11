package poly.edu.restController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import poly.edu.dto.VehicleDto;
import poly.edu.model.Customer;
import poly.edu.model.Vehicle;
import poly.edu.responsitory.VehicleResp;
import poly.edu.service.BrandService;
import poly.edu.service.VehicleSerivce;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/vehicle")
public class VehicleController {

    @Autowired
   private VehicleResp vehicleResp;
    @Autowired
    private VehicleSerivce vehicleSerivce;

    @Autowired
    private BrandService brandService;

    @GetMapping("/searchByVehicleName/{vehicleName}")
    public List<Vehicle>searchByVehicleName(@PathVariable("vehicleName") String vehicleName){
        return vehicleSerivce.findByVehicleNameContaining(vehicleName);
    }


    @GetMapping("/search/{addressId}")
    public List<Vehicle>searchByAdd(@PathVariable("addressId") Integer addressId){
        return vehicleSerivce.searchByAddress( addressId );
    }

    @GetMapping("/findTop8")
    public List<VehicleDto> getTop8(){
        return vehicleSerivce.findTop8();
    }

    @GetMapping("/findById/{vehicleId}")
    public VehicleDto getVehicleDto(@PathVariable("vehicleId") Integer vehicleId){
        return vehicleSerivce.findVehicleDtoById(vehicleId);
    }

    @GetMapping("/getOne/{vehicleId}")
    public Optional<Vehicle> getOne(@PathVariable("vehicleId") Integer vehicleId){
        return vehicleSerivce.findById(vehicleId);
    }




    @GetMapping("/findVehicleWithBrand/{brandId}")
    public List<Vehicle> getVehicleWithBrand(@PathVariable Integer brandId) {
       return vehicleSerivce.findVehiclesBybrandId(brandId);
    }

    @PostMapping("/add")
   public Vehicle add(@RequestBody Vehicle vehicle){
        return vehicleSerivce.saveAndFlush(vehicle);
    }

    @PutMapping("/update/{vehicleId}")
    public Vehicle update(@PathVariable("vehicleId") Integer vehicleID, @RequestBody Vehicle vehicle){
        return vehicleSerivce.saveAndFlush(vehicle);
    }
    @GetMapping("/findBrandIdByVehicleId/{vehicleId}")
    public String getBrandId(@PathVariable("vehicleId") Integer vehicleId){
        return brandService.findBrandIdByVehicleId(vehicleId);
    }
    @GetMapping("/findByStoreId/{storeId}")
    public List<VehicleDto> getVehicleByStoreId(@PathVariable("storeId") Integer storeId){
        return vehicleSerivce.findByStoreId(storeId);
    }

    @GetMapping("/findVehicleByCustomerWasHire/{cusUsername}")
    public List<VehicleDto> getVehiclesByUsernameWasHire(@PathVariable("cusUsername") String username){
        return vehicleSerivce.findVehicleByCustomerWasHire(username);
    }

    @GetMapping("/findByAddress/{address}")
    public List<Vehicle> getByAddress(@PathVariable("address") String address){
        return vehicleSerivce.findByAddressContaining(address);
    }
    @GetMapping("/findByAddressAndPrice/{addressId},{minPrice},{maxPrice}")
    public List<Vehicle> getByAddressAndPrice(@PathVariable("addressId") Integer addressId,
                  @PathVariable("minPrice") Double minPrice,@PathVariable("maxPrice") Double maxPrice){
        return vehicleSerivce.findByAddressAndPrice(addressId,minPrice,maxPrice);
    }

    @GetMapping("/countVehicle")
    public ResponseEntity<?> countVehicle() {
        List<Vehicle> vehicles = vehicleSerivce.findAll();
        int count  = vehicleSerivce.findAll().size();
        return new ResponseEntity<>(count, HttpStatus.OK);
    }

}
