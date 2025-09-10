import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PartnersPage from './pages/PartnersPage';
import ProductsPage from './pages/ProductsPage';
import HTCSolutionsPage from './pages/HTCSolutionsPage';
import BOESolutionsPage from './pages/BOESolutionsPage';
import VVIEWSolutionsPage from './pages/VVIEWSolutionsPage';
import PropertyautomateSolutionsPage from './pages/PropertyautomateSolutionsPage';
import TelePresenzSolutionsPage from './pages/TelePresenzSolutionsPage';
import NanoPreciseSolutionsPage from './pages/NanoPreciseSolutionsPage';
import DisruptiveTechnologiesSolutionsPage from './pages/DisruptiveTechnologiesSolutionsPage';
import AilaSolutionsPage from './pages/AilaSolutionsPage';
import AshtonBentleySolutionPage from './pages/AshtonBentleySolutionPage';
import NueraSolutionsPage from './pages/NueraSolutionPage';
import ZeeveeSolutionPage from './pages/ZeeveeSolutionPage';
import ViverseSolutionsPage from './pages/ViverseSolutionPage';
import ReignsSolutionsPage from './pages/ReignsSolutionsPage';
import RobroSystemsSolutionsPage from './pages/RobroSystemsSolutionsPage';
import DeepQSolutionsPage from './pages/DeepQSolutionsPage';
import PolytronSolutionsPage from './pages/PolytronSolutionsPage';
import VizzioSolutionsPage from './pages/VizzioSolutionsPage';
import XraiSolutionsPage from './pages/XraiSolutionsPage';

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/htc-solutions" element={<HTCSolutionsPage />} />
        <Route path="/boe-solutions" element={<BOESolutionsPage />} />
        <Route path="/vview-solutions" element={<VVIEWSolutionsPage />} />
        <Route
          path="/property-automate-solutions"
          element={<PropertyautomateSolutionsPage />}
        />
        <Route
          path="/tele-presenz-solutions"
          element={<TelePresenzSolutionsPage />}
        />
        <Route
          path="/nano-precise-solutions"
          element={<NanoPreciseSolutionsPage />}
        />
        <Route
          path="/disruptive-technologies-solutions"
          element={<DisruptiveTechnologiesSolutionsPage />}
        />
        <Route path="/aila-solutions" element={<AilaSolutionsPage />} />
        <Route
          path="/Ashton-bentley-solutions"
          element={<AshtonBentleySolutionPage />}
        />
        <Route path="/Nuera-solutions" element={<NueraSolutionsPage />} />
        <Route path="/Zeevee-solutions" element={<ZeeveeSolutionPage />} />
        <Route path="/Viverse-solutions" element={<ViverseSolutionsPage />} />
        <Route path="/reigns-solutions" element={<ReignsSolutionsPage />} />
        <Route
          path="/robro-systems-solutions"
          element={<RobroSystemsSolutionsPage />}
        />
        <Route path="/deepq-solutions" element={<DeepQSolutionsPage />} />
        <Route path="/polytron-solutions" element={<PolytronSolutionsPage />} />
        <Route path="/vizzio-solutions" element={<VizzioSolutionsPage />} />
         <Route path="/xrai-solutions" element={<XraiSolutionsPage />} /> 
      </Routes>
    </div>
  );
}

export default App;
