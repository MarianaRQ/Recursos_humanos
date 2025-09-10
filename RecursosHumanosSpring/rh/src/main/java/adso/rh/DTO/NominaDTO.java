package adso.rh.DTO;

import adso.rh.modelo.Empleado;
import adso.rh.modelo.Nomina;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Date;

public record NominaDTO(Double sueldo, Date fechaPago, Integer idEmpleado, @JsonIgnore Empleado empleado) {

}
