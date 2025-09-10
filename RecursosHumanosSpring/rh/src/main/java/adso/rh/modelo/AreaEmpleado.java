package adso.rh.modelo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "area_empleado")
public class AreaEmpleado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idAreaEmpleado;

    private String nombreArea;

    public AreaEmpleado(String nombreArea) {
       this.nombreArea=nombreArea;
    }


}
