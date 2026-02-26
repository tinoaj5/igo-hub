function App() {
  return (
    <div className="min-h-screen">
      <Header activePage="home" />
      <HeroSection />
      <FeatureSection />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
