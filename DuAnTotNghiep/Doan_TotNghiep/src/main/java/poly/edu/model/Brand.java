package poly.edu.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Brands")
@Entity
public class Brand implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer brandId;
    @Column(columnDefinition = "nvarchar(100) not null")
    private String nameBrand;
    private String location;

    @JsonIgnore
    @OneToMany(mappedBy = "brand")
    List<Vehicle> vehicles;


}
