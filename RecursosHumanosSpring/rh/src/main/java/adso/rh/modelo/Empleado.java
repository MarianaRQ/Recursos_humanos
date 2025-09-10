package adso.rh.modelo;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@JsonInclude(JsonInclude.Include.NON_NULL)
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "empleado")
public class Empleado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idEmpleado;

    private String nombre;
    private String departamento;
    private String telefono;

    public Empleado(String nombre, String departamento, String telefono, AreaEmpleado areaEmpleado) {
        this.nombre = nombre;
        this.departamento = departamento;
        this.telefono = telefono;
        this.areaEmpleado = areaEmpleado;
    }

    @ManyToOne
    @JoinColumn(name = "areaEmpleadoId")
    private AreaEmpleado areaEmpleado;


}
