package adso.rh.repositorio;

import adso.rh.DTO.AreaEmpleadoDTO;
import adso.rh.modelo.AreaEmpleado;
import adso.rh.modelo.Nomina;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IAreaEmpleadoRepositorio extends JpaRepository<AreaEmpleado,Integer> {
}
