package adso.rh.servicio;

import adso.rh.DTO.EmpleadoDTO;
import adso.rh.modelo.AreaEmpleado;
import adso.rh.modelo.Empleado;
import adso.rh.repositorio.IAreaEmpleadoRepositorio;
import adso.rh.repositorio.IEmpleadoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class EmpleadoServicio implements IEmpleadoServicio {

    @Autowired
    private IEmpleadoRepositorio empleadoRepositorio;
    @Autowired
    private IAreaEmpleadoRepositorio areaEmpleadoRepositorio;

    @Override
    public List<Empleado> listarEmpleados() {
        return empleadoRepositorio.findAll();
    }


    public void verificarDatos() {
        List<Empleado> empleados = empleadoRepositorio.findAll();
        for (Empleado empleado : empleados) {
            System.out.println(empleado);
        }
    }


    @Override
    public Empleado buscarEmpleadoPorId(Integer idEmpleado) {
        Empleado empleado = empleadoRepositorio.findById(idEmpleado).orElse(null);
        return empleado;
    }

    @Override
    public Empleado guardarEmpleado(EmpleadoDTO empleado) {

        if (empleado.idAreaEmpleado()==null) {
            throw new IllegalArgumentException("El empleado no puede ser nulo");
        }
        else {
            AreaEmpleado areaEmpleado = areaEmpleadoRepositorio.findById(empleado.idAreaEmpleado()).orElse(null);
            return empleadoRepositorio.save(new Empleado(empleado.nombre(), empleado.departamento(), empleado.telefono(), areaEmpleado));
        }
    }

    @Override
    public void eliminarEmpleado(Empleado empleado) {
        empleadoRepositorio.delete(empleado);
    }

    @Override
    public Optional<Empleado> actualizarEmpleadoPorId(Integer id, EmpleadoDTO empleadoDTO) {
        return empleadoRepositorio.findById(id).map(empleado -> {
            if (empleadoDTO.nombre() != null) {
                empleado.setNombre(empleadoDTO.nombre());
            }
            if (empleadoDTO.departamento() != null) {
                empleado.setDepartamento(empleadoDTO.departamento());
            }
            if (empleadoDTO.telefono() != null) {
                empleado.setTelefono(empleadoDTO.telefono());
            }
            if (empleadoDTO.idAreaEmpleado() != null) {
                areaEmpleadoRepositorio.findById(empleadoDTO.idAreaEmpleado())
                        .ifPresent(empleado::setAreaEmpleado);
            }

            return empleadoRepositorio.save(empleado);
        });
    }

}
