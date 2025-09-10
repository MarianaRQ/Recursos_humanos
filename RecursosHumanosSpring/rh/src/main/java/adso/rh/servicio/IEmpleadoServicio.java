package adso.rh.servicio;

import adso.rh.DTO.EmpleadoDTO;
import adso.rh.modelo.Empleado;
import java.util.List;
import java.util.Optional;

public interface IEmpleadoServicio {

    public List<Empleado> listarEmpleados();

    public Empleado buscarEmpleadoPorId(Integer idEmpleado);

    public Empleado guardarEmpleado(EmpleadoDTO empleadoDTO);

    public void eliminarEmpleado(Empleado empleado);

    public Optional<Empleado> actualizarEmpleadoPorId(Integer idEmpleado, EmpleadoDTO empleadoDTO);
}
