package adso.rh.controlador;

import adso.rh.DTO.AreaEmpleadoDTO;
import adso.rh.DTO.EmpleadoDTO;
import adso.rh.exepciones.RecursoNoEncontradoExcepcion;
import adso.rh.modelo.AreaEmpleado;
import adso.rh.modelo.Empleado;
import adso.rh.servicio.IAreaEmpleadoServicio;
import adso.rh.servicio.IEmpleadoServicio;
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
public class AreaEmpleadoControlador {
    private static final Logger logger=
            LoggerFactory.getLogger(AreaEmpleadoControlador.class);


    @Autowired
    private IAreaEmpleadoServicio areaEmpleadoServicio;

    @Autowired
    private ObjectMapper objectMapper; // Asegúrate de importar com.fasterxml.jackson.databind.ObjectMapper

    @GetMapping("/area-empleado")
    public List<AreaEmpleado> obtenerArea(){
        var area = areaEmpleadoServicio.listarAreas();
        area.forEach(areaEmpleado -> logger.info(areaEmpleado.toString()));
        return area;
    }

    @PostMapping("/area-empleado/save")
    public AreaEmpleado agregarAreaEmpleado(@RequestBody AreaEmpleadoDTO areaEmpleadoDTO){
        return areaEmpleadoServicio.guardarArea(areaEmpleadoDTO);
    }

    @GetMapping("/area-empleado/{id}")
    public ResponseEntity<AreaEmpleado> obtenerAreaPorId(@PathVariable Integer id){
        AreaEmpleado areaEmpleado = areaEmpleadoServicio.buscarAreaPorId(id);
        if(areaEmpleado == null)
            throw new RecursoNoEncontradoExcepcion("No se encontro el id " + id);
        return ResponseEntity.ok(areaEmpleado);
    }

    @DeleteMapping("/area-empleado/delete/{id}")
    public ResponseEntity<Map<String, Boolean>> eliminarArea(@PathVariable Integer id){
        AreaEmpleado areaEmpleado = areaEmpleadoServicio.buscarAreaPorId(id);
        if (areaEmpleado == null)
            throw new RecursoNoEncontradoExcepcion("El id recibido no existe " + id);
        areaEmpleadoServicio.eliminarArea(areaEmpleado);

        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminado", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }

    @PutMapping("/area-empleado/update/{id}")
    public ResponseEntity<Optional<AreaEmpleado>> actualizarArea(@PathVariable Integer id, @RequestBody AreaEmpleadoDTO areaEmpleadoDTO){
        return new ResponseEntity<>(areaEmpleadoServicio.actualizarAreaPorId(id, areaEmpleadoDTO), HttpStatus.OK);
    }

}
