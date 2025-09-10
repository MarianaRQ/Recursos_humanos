package adso.rh.controlador;

import adso.rh.DTO.EmpleadoDTO;
import adso.rh.exepciones.RecursoNoEncontradoExcepcion;
import adso.rh.modelo.Empleado;
import adso.rh.servicio.IEmpleadoServicio;
import com.fasterxml.jackson.core.JsonProcessingException;
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
@RequestMapping("rh-app/")
public class EmpleadoControlador {
    private static final Logger logger=
            LoggerFactory.getLogger(EmpleadoControlador.class);


    @Autowired
    private IEmpleadoServicio empleadoServicio;

    @Autowired
    private ObjectMapper objectMapper; 
    
    @GetMapping("/empleados")
    public List<Empleado> obtenerEmpleados(){
        var empleados = empleadoServicio.listarEmpleados();
        empleados.forEach(e -> logger.info("Empleado: " + e.getIdEmpleado()  + ", nombre: " + e.getNombre()));
        return empleados;
    }
    @PostMapping("/empleados/save")
    public Empleado agregarEmpleado(@RequestBody EmpleadoDTO empleado){
        return empleadoServicio.guardarEmpleado(empleado);
    }

    @GetMapping("/empleados/{id}")
    public ResponseEntity<Empleado> obtenerEmpleadoPorId(@PathVariable Integer id){
        Empleado empleado = empleadoServicio.buscarEmpleadoPorId(id);
        if(empleado == null)
            throw new RecursoNoEncontradoExcepcion("No se encontro el id " + id);
        return ResponseEntity.ok(empleado);
    }

    @PatchMapping("/empleados/update/{id}")
    public ResponseEntity<Optional<Empleado>> actualizarEmpleadoParcial(
            @PathVariable Integer id,
            @RequestBody EmpleadoDTO empleadoRecibido) {
        return new ResponseEntity<>(empleadoServicio.actualizarEmpleadoPorId(id, empleadoRecibido), HttpStatus.OK);
    }


    @DeleteMapping("/empleados/delete/{id}")
    public ResponseEntity<Map<String, Boolean>> eliminarEmpleado(@PathVariable Integer id){
        Empleado empleado = empleadoServicio.buscarEmpleadoPorId(id);
        if (empleado == null)
            throw new RecursoNoEncontradoExcepcion("El id recibido no existe " + id);
            empleadoServicio.eliminarEmpleado(empleado);

        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminado", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }


}
