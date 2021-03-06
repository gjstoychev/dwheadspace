const SpellsMock = [
  {name: "Calm Embrace of Illusionary Beauty", label: "CEIB", size: 25},
  {name: "Doctor Kelleflump's Deadly Demon", label: "DKDD", size: 60},
  {name: "Effermhor's Hypersonic Assault", label: "EHA", size: 30},
  {name: "Fiddelmaker's Auriferous Embrace", label: "FAE", size: 20},
  {name: "Frygellhan's Fiendish Orbit Disruptor", label: "FFOD", size: 15},
  {name: "G'flott's Olfactory Nightmare", label: "GON", size: 30},
  {name: "Journey of the Heavenly Storm Dragon", label: "JHSD", size: 75},
  {name: "Kamikaze Oryctolagus Flammula", label: "KOF", size: 30},
  {name: "Kelleflump's Irritating Demon", label: "KID", size: 20},
  {name: "Malich's Penetrating Ocular Lance", label: "MPOL", size: 5},
  {name: "Memories of a Vicious Chicken", label: "MVC", size: 5},
  {name: "Mugwuddle's Muddling Mirage", label: "MMM", size: 25},
  {name: "Myrandil's Vicious Seizure", label: "MVS", size: 30},
  {name: "Nargl'frob's Empyrean Spear", label: "NES", size: 45},
  {name: "Narquin's Mist of Doom", label: "NMD", size: 15},
  {name: "Old Bellicus' Brazen Knuckles", label: "OBBK", size: 25},
  {name: "Pragi's Fiery Gaze", label: "PFG", size: 30},
  {name: "Pragi's Lost Gaze", label: "PLG", size: 30},
  {name: "Reckless Encouragement of Arcane Peacock", label: "REAP", size: 20},
  {name: "Rugged Victor's Rodentia Vivisection", label: "RVRV", size: 10},
  {name: "Skeetbraskin's Fuliginous Perdition", label: "SFP2", size: 20},
  {name: "Sorsalsean's Seismic Eruption", label: "SSE", size: 40},
  {name: "Stacklady's Morphic Resonator", label: "SMR", size: 40},
  {name: "Von Hasselhoff's Skin Condition", label: "VHSC", size: 35},
  {name: "Wonker's Wicked Wobble", label: "WWW", size: 45},
  {name: "Wungle's Body Part Suggestion", label: "WBPS", size: 30},
  {name: "Wungle's Great Sucking", label: "WGS", size: 35},
  {name: "Chrenedict's Corporeal Covering", label: "CCC", size: 25},
  {name: "Endorphin's Floating Friend", label: "EFF", size: 20},
  {name: "Grisald's Reanimated Guardian", label: "GRG", size: 40},
  {name: "Heezlewurst's Elemental Buffer", label: "HEB", size: 30},
  {name: "Kipperwald's Perlustration Prevention", label: "KPP", size: 15},
  {name: "Sageroff's Sentry Summoning", label: "SSS2", size: 30},
  {name: "Sorklin's Field of Protection", label: "SFP", size: 10},
  {name: "Transcendent Pneumatic Alleviator", label: "TPA", size: 25},
  {name: "A Cup of Tea and Sake", label: "CTS", size: 15 },
  {name: "Al'Hrahaz's Scintillating Blorpler", label: "AHSB", size: 25},
  {name: "Amazing Silicate Blorpler", label: "ASB", size: 5},
  {name: "Atmospheric Inscription Wonder", label: "AIW", size: 25},	
  {name: "Bifram's Amazing Fireworks", label: "BAF", size: 15},
  {name: "Booch's Extremal Polymorphism", label: "BEP", size: 45},
  {name: "Boolywog's Forbidden Pleasures", label: "BFP", size: 10},
  {name: "Brassica Oleracea Ambulata", label: "BOA", size: 10},
  {name: "Brother Happalon's Elementary Enchanting", label: "BHEE", size: 5},
  {name: "Cherry Blossoms in Bloom", label: "CBB", size: 10},
  {name: "Collatrap's Instant Pickling Stick", label: "CIPS", size: 10},
  {name: "Crondor's Fabulous Detection", label: "CFD", size: 10},
  {name: "Crondor's Marvellous Sequestration", label: "CMS2", size: 60},
  {name: "Crondor's Mysterious Sparkling", label: "CMS", size: 40},
  {name: "Dismal Digit of Doom", label: "DDD", size: 10},
  {name: "Doctor Worblehat's Flaming Primate Premonition", label: "DWFPP", size: 25},
  {name: "Duander's Thaumic Luminosity Disperser", label: "DTLD", size: 20},
  {name: "Ellamandyr's Hyaline Amulet", label: "EHA2", size: 15},
  {name: "Eringyas' Surprising Bouquet", label: "ESB", size: 10},
  {name: "Fabrication Classification Identification", label: "FCI", size: 15},
  {name: "Finneblaugh's Thaumic Float", label: "FTF", size: 20},
  {name: "Floron's Fabulous Mirror", label: "FFM", size: 15},
  {name: "Friddlefrod's Hydratic Extrusion", label: "FHE", size: 10},
  {name: "Fyodor's Nimbus of Porterage", label: "FNP", size: 35},
  {name: "Gillimer's Ring of Temperate Weather", label: "GRTW", size: 25},
  {name: "Grisald's Chilly Touch", label: "GCT", size: 5},
  {name: "Gryntard's Feathery Reliever", label: "GFR", size: 25},
  {name: "Independent Recurring Vocaliser", label: "IRV", size: 5},
  {name: "Jogloran's Portal of Cheaper Travel", label: "JPCT", size: 20},
  {name: "Jorodin's Magnificent Communicator", label: "JMC", size: 20},
  {name: "Malich's AshkEnte Circle", label: "MAC", size: 10},
  {name: "Malich's AshkEnte Summoning Incantation", label: "MASI", size: 60},
  {name: "Master Glimer's Amazing Glowing Thing", label: "MGAGT", size: 30},
  {name: "Master Woddeley's Luminescent Companion", label: "MWLC", size: 10},
  {name: "Myrandil's Mask of Death", label: "MMD", size: 10},
  {name: "Narquin's Hand of Acquisition", label: "NHA", size: 30},
  {name: "Objandeller's Thaumic Funnel", label: "OTF", size: 15},
  {name: "Patient Taming of the Quantum Weather Butterfly", label: "PTQWB", size: 50},
  {name: "Polliwiggle's Puissancy Probe", label: "PPP", size: 10},
  {name: "Pragi's Molten Gaze", label: "PMG", size: 10},
  {name: "Professor Flambardie's Grim Amulet", label: "PFGA", size: 50},
  {name: "Rubayak's Power Dispenser", label: "RPD", size: 5},
  {name: "Rubayak's Power Storage", label: "RPS", size: 30},
  {name: "Scolorid's Scintillating Scribbling", label: "SSS", size: 10},
  {name: "Thousand Dancing Celestial Fates", label: "TDCF", size: 20},
  {name: "Torqvald's Illusion Generatrix", label: "TIG", size: 50},
  {name: "Torqvald's Many Colours", label: "TMC", size: 10},
  {name: "Turnwhistle's Effulgent Autiridescence", label: "TEA", size: 10},
  {name: "Union of the Phoenix and Divine Dragon", label: "UPDD", size: 25},
  {name: "Worstler's Advanced Metallurgical Glance", label: "WAMG", size: 15},
  {name: "Worstler's Elementary Mineralogical Glance", label: "WEMG", size: 5},
  {name: "Wurphle's Midnight Snack", label: "WMS", size: 25},
  {name: "Yordon's Extremal Extension", label: "YEE", size: 35}
]

export default SpellsMock