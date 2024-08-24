-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-08-2024 a las 16:54:48
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
-- Base de datos: `gestion_estudiantes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiantes`
--

CREATE TABLE `estudiantes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `cedula` varchar(20) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `carrera` varchar(100) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `inscrito` tinyint(1) DEFAULT 1,
  `deuda` decimal(10,2) DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estudiantes`
--

INSERT INTO `estudiantes` (`id`, `nombre`, `cedula`, `edad`, `carrera`, `correo`, `inscrito`, `deuda`) VALUES
(1, 'Rhonny Jaimes Gonzalez', 'V-29.718.095', 22, 'Ingeniería en Computación', 'rhonny@uvm.com', 0, 100.00),
(2, 'Ana Perez', 'V-26.718.095', 24, 'Ingeniería en Computación', 'ana.perez@uvm.com', 1, 150.00),
(3, 'Carlos Hernandez', 'V-28.718.095', 21, 'Derecho', 'carlos.hernandez@uvm.com', 1, 0.00),
(4, 'Luis Alberto Fernández', 'V-27.318.091', 23, 'Ingeniería en Computación', 'luis.fernandez@uvm.com', 1, 50.00),
(5, 'María Teresa Suárez', 'V-25.818.112', 22, 'Derecho', 'maria.suarez@uvm.com', 1, 0.00),
(6, 'José Manuel Rojas', 'V-30.718.123', 20, 'Administración', 'jose.rojas@uvm.com', 1, 200.00),
(7, 'Patricia Gómez', 'V-29.118.119', 21, 'Medicina', 'patricia.gomez@uvm.com', 0, 0.00),
(8, 'Raúl González', 'V-28.518.120', 24, 'Ingeniería en Computación', 'raul.gonzalez@uvm.com', 1, 100.00),
(9, 'Elena García', 'V-26.918.121', 23, 'Derecho', 'elena.garcia@uvm.com', 0, 0.00),
(11, 'Norlys', '4932412', 30, 'Contaduria', 'norlys@uvm.com', 1, 1000.00),
(12, 'Antonio Calderon', 'V-30.123.452', 36, 'Ingeniería en Computación', 'antonio@uvm.com', 0, 100.00);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `estudiantes`
--
ALTER TABLE `estudiantes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `estudiantes`
--
ALTER TABLE `estudiantes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
