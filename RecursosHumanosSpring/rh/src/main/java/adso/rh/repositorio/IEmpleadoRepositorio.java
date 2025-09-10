package adso.rh.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import adso.rh.modelo.Empleado;
import org.springframework.stereotype.Repository;

@Repository
public interface IEmpleadoRepositorio extends JpaRepository<Empleado,Integer> {
}
