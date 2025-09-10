package adso.rh.controlador;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class menuControlador {



        @GetMapping("/menu")
        public ResponseEntity<Map<String, Object>> getMenu() {
            List<Map<String, String>> menu = new ArrayList<>();

            menu.add(Map.of(
                    "nombre", "Gestión de Empleados",
                    "ruta", "/empleados",
                    "descripcion", "Ver y administrar empleados"
            ));
            menu.add(Map.of(
                    "nombre", "Gestión de Nóminas",
                    "ruta", "/nominas",
                    "descripcion", "Ver y administrar nóminas"
            ));
            menu.add(Map.of(
                    "nombre", "Áreas de Empleados",
                    "ruta", "/areas",
                    "descripcion", "Ver las áreas de trabajo"
            ));

            return ResponseEntity.ok(Map.of("menu", menu));
        }


}
