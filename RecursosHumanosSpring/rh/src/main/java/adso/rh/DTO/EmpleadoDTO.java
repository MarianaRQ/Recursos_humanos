package adso.rh.DTO;

import adso.rh.modelo.AreaEmpleado;
import adso.rh.modelo.Empleado;
import com.fasterxml.jackson.annotation.JsonIgnore;

public record EmpleadoDTO(String nombre, String departamento, String telefono, Integer idAreaEmpleado, @JsonIgnore AreaEmpleado areaEmpleado) {

}


