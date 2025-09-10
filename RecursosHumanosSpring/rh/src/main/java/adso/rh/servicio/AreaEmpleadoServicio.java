package adso.rh.servicio;

import adso.rh.DTO.AreaEmpleadoDTO;
import adso.rh.DTO.EmpleadoDTO;
import adso.rh.modelo.AreaEmpleado;
import adso.rh.modelo.Empleado;
import adso.rh.repositorio.IAreaEmpleadoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AreaEmpleadoServicio implements IAreaEmpleadoServicio{

    @Autowired
    private IAreaEmpleadoRepositorio areaEmpleadoRepositorio;

    @Override
    public List<AreaEmpleado>listarAreas(){
        return areaEmpleadoRepositorio.findAll();
    }


    @Override
    public AreaEmpleado buscarAreaPorId(Integer id) {
        return areaEmpleadoRepositorio.findById(id).orElse(null);
    }
    @Override
    public AreaEmpleado guardarArea(AreaEmpleadoDTO areaEmpleadoDTO) {
        AreaEmpleado area = new AreaEmpleado();
        area.setNombreArea(areaEmpleadoDTO.nombreArea());
        return areaEmpleadoRepositorio.save(area);
    }

    @Override
    public Optional<AreaEmpleado> actualizarAreaPorId(Integer idAreaEmpleado, AreaEmpleadoDTO areaEmpleadoDTO) {
        return areaEmpleadoRepositorio.findById(idAreaEmpleado).map(areaEmpleado -> {
            areaEmpleado.setNombreArea(areaEmpleadoDTO.nombreArea());
            return areaEmpleadoRepositorio.save(areaEmpleado);
        });
    }



    @Override
    public void eliminarArea(AreaEmpleado areaEmpleado) {
        areaEmpleadoRepositorio.delete(areaEmpleado);
    }
}
