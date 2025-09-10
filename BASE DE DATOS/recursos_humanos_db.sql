-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-07-2025 a las 02:18:42
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `recursos_humanos_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `area_empleado`
--

CREATE TABLE `area_empleado` (
  `id_area_empleado` int(11) NOT NULL,
  `nombre_area` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `area_empleado`
--

INSERT INTO `area_empleado` (`id_area_empleado`, `nombre_area`) VALUES
(1, 'contabilidad'),
(4, 'TICS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

CREATE TABLE `empleado` (
  `id_empleado` int(11) NOT NULL,
  `departamento` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `area_empleado_id` int(11) DEFAULT NULL,
  `id_area_empleado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empleado`
--

INSERT INTO `empleado` (`id_empleado`, `departamento`, `nombre`, `telefono`, `area_empleado_id`, `id_area_empleado`) VALUES
(1, 'ticc', 'mariaaaa', '223444', 4, NULL),
(2, 'finanzas', 'Alberto00', '32084948', 1, NULL),
(3, 'Mercadeo', 'Mateo', '329202002', 1, NULL),
(4, 'tic', 'Anderson', '32020022', 1, NULL),
(5, 'Cobranza', 'mariana', '3929229', 1, NULL),
(7, 'Finanzas', 'Beto', '320200202', 4, NULL),
(8, 'Finanzas', 'Liliana', '320404040', 4, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nomina`
--

CREATE TABLE `nomina` (
  `id_nomina` int(11) NOT NULL,
  `fecha_pago` datetime(6) DEFAULT NULL,
  `sueldo` double DEFAULT NULL,
  `empleado_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `nomina`
--

INSERT INTO `nomina` (`id_nomina`, `fecha_pago`, `sueldo`, `empleado_id`) VALUES
(2, '2025-03-04 19:00:00.000000', 60000, 2),
(3, '2025-07-16 19:00:00.000000', 5000000, 1),
(4, '2025-07-17 19:00:00.000000', 5000000, 1),
(8, '2025-07-10 19:00:00.000000', 4500, 4),
(9, '2025-07-13 19:00:00.000000', 455, 2),
(10, '2025-03-03 19:00:00.000000', 50000, 1),
(11, '2025-07-03 19:00:00.000000', 466, 2),
(12, '2025-07-18 19:00:00.000000', 5000000, 8);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `area_empleado`
--
ALTER TABLE `area_empleado`
  ADD PRIMARY KEY (`id_area_empleado`);

--
-- Indices de la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`id_empleado`),
  ADD KEY `FKkeunhek5ph256131p7vuy9n3b` (`area_empleado_id`),
  ADD KEY `FKdd71g3ifra5ixy8c7a4lcc5ia` (`id_area_empleado`);

--
-- Indices de la tabla `nomina`
--
ALTER TABLE `nomina`
  ADD PRIMARY KEY (`id_nomina`),
  ADD KEY `FKm8493swspthispthv1lqbup06` (`empleado_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `area_empleado`
--
ALTER TABLE `area_empleado`
  MODIFY `id_area_empleado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `empleado`
--
ALTER TABLE `empleado`
  MODIFY `id_empleado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `nomina`
--
ALTER TABLE `nomina`
  MODIFY `id_nomina` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD CONSTRAINT `FKdd71g3ifra5ixy8c7a4lcc5ia` FOREIGN KEY (`id_area_empleado`) REFERENCES `area_empleado` (`id_area_empleado`),
  ADD CONSTRAINT `FKkeunhek5ph256131p7vuy9n3b` FOREIGN KEY (`area_empleado_id`) REFERENCES `area_empleado` (`id_area_empleado`);

--
-- Filtros para la tabla `nomina`
--
ALTER TABLE `nomina`
  ADD CONSTRAINT `FKm8493swspthispthv1lqbup06` FOREIGN KEY (`empleado_id`) REFERENCES `empleado` (`id_empleado`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
