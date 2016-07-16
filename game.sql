-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Vært: 127.0.0.1
-- Genereringstid: 16. 07 2016 kl. 16:59:45
-- Serverversion: 10.1.13-MariaDB
-- PHP-version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `game`
--

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `animation`
--

CREATE TABLE `animation` (
  `ID` varchar(11) NOT NULL,
  `Type` varchar(32) NOT NULL,
  `Sequence` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `animation`
--

INSERT INTO `animation` (`ID`, `Type`, `Sequence`) VALUES
('bob', 'Genius', 'JSON JSON'),
('john doe', 'Idiot', 'JSON JSON++');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `graphic`
--

CREATE TABLE `graphic` (
  `ID` varchar(11) NOT NULL,
  `IMG` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `graphic`
--

INSERT INTO `graphic` (`ID`, `IMG`) VALUES
('bob', '???'),
('john doe', '?!?');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `history`
--

CREATE TABLE `history` (
  `ID` varchar(11) NOT NULL,
  `Description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `history`
--

INSERT INTO `history` (`ID`, `Description`) VALUES
('bob', 'Awesome guy who is the master of the universe'),
('john doe', 'Nobody knows him...');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `unit`
--

CREATE TABLE `unit` (
  `ID` char(11) NOT NULL,
  `HP` int(11) NOT NULL,
  `Attack` int(11) NOT NULL,
  `Defence` int(11) NOT NULL,
  `Speed` int(11) NOT NULL,
  `Size` int(11) NOT NULL,
  `AttRange` int(11) NOT NULL,
  `Type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `unit`
--

INSERT INTO `unit` (`ID`, `HP`, `Attack`, `Defence`, `Speed`, `Size`, `AttRange`, `Type`) VALUES
('bob', 10, 2, 3, 4, 5, 6, 7),
('john doe', 10, 2, 3, 4, 5, 6, 3);

--
-- Begrænsninger for dumpede tabeller
--

--
-- Indeks for tabel `animation`
--
ALTER TABLE `animation`
  ADD UNIQUE KEY `ID_unit` (`ID`);

--
-- Indeks for tabel `graphic`
--
ALTER TABLE `graphic`
  ADD UNIQUE KEY `ID_unit` (`ID`);

--
-- Indeks for tabel `history`
--
ALTER TABLE `history`
  ADD UNIQUE KEY `ID_unit` (`ID`);

--
-- Indeks for tabel `unit`
--
ALTER TABLE `unit`
  ADD UNIQUE KEY `ID_unique` (`ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
