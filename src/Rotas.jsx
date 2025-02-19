import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Páginas/Home';

//Rotas Battle Royale
import Battle from './Páginas/Battle Royale';

//Rotas FPS
import Fps from './Páginas/FPS';

// ROTAS MOBA
import Moba from './Páginas/MOBA';
import LOL from './Páginas/MOBA/Páginas/LOL/LOL';
import MobileLegends from './Páginas/MOBA/Páginas/MobileLegends/MobileLegends';
import PokemonUnite from './Páginas/MOBA/Páginas/PokemonUnite/PokemonUnite';

// Rotas RPG
import Rpg from './Páginas/RPG';
import Minecraft from './Páginas/RPG/Páginas/Minecraft/Minecraft';
import Gta from './Páginas/RPG/Páginas/Gta/Gta';
import Roblox from './Páginas/RPG/Páginas/Roblox/Roblox';


export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/battleroyale" element={<Battle />} />
        <Route path="/fps" element={<Fps />} />
        <Route path="/moba" element={<Moba />} />
        <Route path="/lol" element={<LOL />} />
        <Route path="/mobilelegends" element={<MobileLegends />} />
        <Route path="/pokemonunite" element={<PokemonUnite />} />
        <Route path="/rpg" element={<Rpg />} />
        <Route path="/mine" element={<Minecraft />} />
        <Route path='/gta' element={<Gta />} />
        <Route path='/roblox' element={<Roblox />} />
      </Routes>
    </BrowserRouter>
  )
}
