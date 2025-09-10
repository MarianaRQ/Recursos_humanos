package adso.rh.servicio;

import adso.rh.DTO.AreaEmpleadoDTO;
import adso.rh.DTO.EmpleadoDTO;
import adso.rh.modelo.AreaEmpleado;
import adso.rh.modelo.Empleado;

import java.util.List;
import java.util.Optional;

public interface IAreaEmpleadoServicio {
    List<AreaEmpleado> listarAreas();

    AreaEmpleado buscarAreaPorId(Integer idAreaEmpleado);

    AreaEmpleado guardarArea(AreaEmpleadoDTO areaEmpleadoDTO);

    public Optional<AreaEmpleado> actualizarAreaPorId(Integer idAreaEmpleado, AreaEmpleadoDTO areaEmpleadoDTO);

    void eliminarArea(AreaEmpleado areaEmpleado);
}
