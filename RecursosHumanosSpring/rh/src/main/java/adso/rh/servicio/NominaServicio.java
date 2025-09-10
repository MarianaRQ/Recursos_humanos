package adso.rh.servicio;


import adso.rh.DTO.AreaEmpleadoDTO;
import adso.rh.DTO.NominaDTO;
import adso.rh.modelo.AreaEmpleado;
import adso.rh.modelo.Empleado;
import adso.rh.modelo.Nomina;
import adso.rh.repositorio.IEmpleadoRepositorio;
import adso.rh.repositorio.INominaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NominaServicio implements  INominaServicio{

    @Autowired
    private INominaRepositorio nominaRepositorio;
    @Autowired
    private IEmpleadoRepositorio empleadoRepositorio;

    @Override
    public List<Nomina> listarNomina() {
        return nominaRepositorio.findAll();
    }

    @Override
    public Nomina buscarNominaPorId(Integer idNomina) {
        Nomina nomina = nominaRepositorio.findById(idNomina).orElse(null);
        return nomina;
    }

    @Override
    public Nomina guardarNomina(NominaDTO nominaDTO) {
        Empleado empleado = empleadoRepositorio.findById(nominaDTO.idEmpleado())
                .orElseThrow(() -> new RuntimeException("Empleado no encontrado con ID: " + nominaDTO.idEmpleado()));

        // Crear la nómina con fecha, sueldo y empleado
        Nomina nomina = new Nomina(
                nominaDTO.fechaPago(),
                nominaDTO.sueldo()
        );
        nomina.setEmpleado(empleado); // Asignar el empleado

        return nominaRepositorio.save(nomina);
    }



    @Override
    public void eliminarNomina(Nomina nomina) {
        nominaRepositorio.delete(nomina);
    }
    @Override
    public Optional<Nomina> actualizarNominaPorId(Integer idNomina, NominaDTO nominaDTO) {
        return nominaRepositorio.findById(idNomina).map(nomina -> {
            nomina.setFechaPago(nominaDTO.fechaPago());
            nomina.setSueldo(nominaDTO.sueldo());

            // Buscar el empleado y asignarlo a la nómina
            Empleado empleado = empleadoRepositorio.findById(nominaDTO.idEmpleado())
                    .orElseThrow(() -> new RuntimeException("Empleado no encontrado con ID: " + nominaDTO.idEmpleado()));
            nomina.setEmpleado(empleado);

            return nominaRepositorio.save(nomina);
        });
    }



}


