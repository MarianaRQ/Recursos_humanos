package adso.rh.repositorio;

import adso.rh.modelo.Empleado;
import adso.rh.modelo.Nomina;
import org.springframework.data.jpa.repository.JpaRepository;

public interface INominaRepositorio extends JpaRepository<Nomina,Integer> {
}
