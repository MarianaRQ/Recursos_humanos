package adso.rh.modelo;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "nomina")
public class Nomina {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idNomina;

    private Double sueldo;
    private Date fechaPago;

    public Nomina(Date fechaPago, Double sueldo) {
        this.fechaPago=fechaPago;
        this.sueldo=sueldo;

    }

    @ManyToOne
    @JoinColumn(name = "empleado_id")
    private Empleado empleado;

}
