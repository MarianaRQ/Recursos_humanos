package adso.rh.servicio;

import adso.rh.DTO.EmpleadoDTO;
import adso.rh.DTO.NominaDTO;
import adso.rh.modelo.Empleado;
import adso.rh.modelo.Nomina;

import java.util.List;
import java.util.Optional;

public interface INominaServicio {
    List<Nomina> listarNomina();

    Nomina buscarNominaPorId(Integer idNomina);

    Nomina guardarNomina(NominaDTO nominaDTO);

    public void eliminarNomina(Nomina nomina);


    public Optional<Nomina> actualizarNominaPorId(Integer idNomina, NominaDTO nominaDTO);

}
