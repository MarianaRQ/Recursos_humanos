package adso.rh.controlador;

import adso.rh.DTO.AreaEmpleadoDTO;
import adso.rh.DTO.NominaDTO;
import adso.rh.exepciones.RecursoNoEncontradoExcepcion;
import adso.rh.modelo.AreaEmpleado;
import adso.rh.modelo.Empleado;
import adso.rh.modelo.Nomina;
import adso.rh.servicio.IEmpleadoServicio;
import adso.rh.servicio.INominaServicio;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("rh-app")
@CrossOrigin(value = "http://localhost:3000")
public class NominaControlador {

    private static final Logger logger=
            LoggerFactory.getLogger(NominaControlador.class);


    @Autowired
    private INominaServicio nominaServicio;

    @Autowired
    private ObjectMapper objectMapper; // Asegúrate de importar com.fasterxml.jackson.databind.ObjectMapper

    @GetMapping("/nomina")
    public List<Nomina> obtenerNominas(){
        var nominas = nominaServicio.listarNomina();
        nominas.forEach((nomina -> logger.info(nomina.toString())));
        return nominas;
    }

    @GetMapping("/nomina/{id}")
    public ResponseEntity<Nomina> obtenerNominaPorId(@PathVariable Integer id){
        Nomina nomina = nominaServicio.buscarNominaPorId(id);
        if(nomina == null)
            throw new RecursoNoEncontradoExcepcion("No se encontro el id " + id);
        return ResponseEntity.ok(nomina);
    }

    @DeleteMapping("/nomina/delete/{id}")
    public ResponseEntity<Map<String, Boolean>> eliminarNomina(@PathVariable Integer id){
        Nomina nomina = nominaServicio.buscarNominaPorId(id);
        if (nomina == null)
            throw new RecursoNoEncontradoExcepcion("El id recibido no existe " + id);
        nominaServicio.eliminarNomina(nomina);

        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminado", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }

    @PostMapping("/nomina/save")
    public Nomina agregarNomina(@RequestBody NominaDTO nominaDTO){
        return nominaServicio.guardarNomina(nominaDTO);
    }

    @PatchMapping("/nomina/update/{id}")
    public ResponseEntity<Optional<Nomina>> actualizarNomina(@PathVariable Integer id, @RequestBody NominaDTO nominaDTO){
        return new ResponseEntity<>(nominaServicio.actualizarNominaPorId(id, nominaDTO), HttpStatus.OK);
    }
}
