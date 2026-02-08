import { useState, useMemo } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import {
  Table, TableHeader, TableBody, TableHead, TableRow, TableCell,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { allProducts, productVideos, type Product, type ProductVideo } from "@/data/products";
import { Search, Filter, Download } from "lucide-react";

type TabType = "all" | "loose-stones" | "rings" | "earrings" | "necklaces" | "bracelets" | "showcase" | "videos";

const categoryLabels: Record<string, string> = {
  "all": "All Items",
  "loose-stones": "Loose Stones",
  "rings": "Rings",
  "earrings": "Earrings",
  "necklaces": "Necklaces",
  "bracelets": "Bracelets",
  "showcase": "Showcase / Portfolio",
  "videos": "Videos",
};

const isPlaceholder = (val?: string) => !val || val.includes("[") || val.includes("החלף");

const PlaceholderCell = ({ value, label }: { value?: string; label: string }) => {
  if (!value || isPlaceholder(value)) {
    return (
      <span className="text-destructive/60 italic text-xs">
        ⚠ {label}
      </span>
    );
  }
  return <span className="text-foreground text-xs">{value}</span>;
};

const StatusBadge = ({ product }: { product: Product }) => {
  const fields = [
    product.price,
    product.material,
    product.diamond?.carat,
    product.diamond?.color,
    product.diamond?.clarity,
    product.diamond?.cut,
    product.gia?.reportNumber,
    product.weight,
    product.dimensions,
  ];
  const total = fields.length;
  const filled = fields.filter((f) => f && !isPlaceholder(f)).length;
  const pct = Math.round((filled / total) * 100);

  if (pct === 100) return <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">Complete</span>;
  if (pct > 50) return <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground">{pct}%</span>;
  return <span className="text-xs px-2 py-0.5 rounded-full bg-destructive/10 text-destructive">{pct}%</span>;
};

const Inventory = () => {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    let items: Product[] = [];
    if (activeTab === "videos") return [];
    if (activeTab === "all") items = allProducts;
    else if (activeTab === "showcase") items = allProducts.filter((p) => p.type === "showcase");
    else items = allProducts.filter((p) => p.category === activeTab && p.type !== "showcase");

    if (search) {
      const q = search.toLowerCase();
      items = items.filter(
        (p) => p.name.toLowerCase().includes(q) || p.id.toLowerCase().includes(q) || p.category.includes(q)
      );
    }
    return items;
  }, [activeTab, search]);

  const filteredVideos = useMemo(() => {
    if (activeTab !== "videos" && activeTab !== "all") return [];
    const vids = productVideos;
    if (!search) return vids;
    const q = search.toLowerCase();
    return vids.filter((v) => v.title.toLowerCase().includes(q) || v.id.includes(q));
  }, [activeTab, search]);

  const exportCSV = () => {
    const headers = ["ID","Name","Category","Type","Price","Material","Carat","Color","Clarity","Cut","Shape","Fluorescence","GIA Report","Weight","Dimensions","Image File"];
    const rows = allProducts.map((p) => [
      p.id, p.name, p.category, p.type, p.price,
      p.material || "", p.diamond?.carat || "", p.diamond?.color || "",
      p.diamond?.clarity || "", p.diamond?.cut || "", p.diamond?.shape || "",
      p.diamond?.fluorescence || "", p.gia?.reportNumber || "",
      p.weight || "", p.dimensions || "", p.id,
    ]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "moorediamonds-inventory.csv"; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-6 pb-16 px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-light text-foreground">Inventory Management</h1>
            <p className="text-sm text-muted-foreground mt-1">
              {allProducts.length} products · {productVideos.length} videos · Fields marked <span className="text-destructive">⚠</span> need data
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={exportCSV} className="gap-2 rounded-none">
            <Download className="h-4 w-4" /> Export CSV
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-4">
          {(Object.keys(categoryLabels) as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 text-xs border transition-colors ${
                activeTab === tab
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {categoryLabels[tab]}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative max-w-sm mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, ID, or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 rounded-none text-sm"
          />
        </div>

        {/* Products Table */}
        {activeTab !== "videos" && (
          <div className="border border-border overflow-x-auto mb-12">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/30">
                  <TableHead className="w-16 text-xs">Image</TableHead>
                  <TableHead className="text-xs">ID</TableHead>
                  <TableHead className="text-xs">Name</TableHead>
                  <TableHead className="text-xs">Category</TableHead>
                  <TableHead className="text-xs">Type</TableHead>
                  <TableHead className="text-xs">Price (₪)</TableHead>
                  <TableHead className="text-xs">Material</TableHead>
                  <TableHead className="text-xs">Carat</TableHead>
                  <TableHead className="text-xs">Color</TableHead>
                  <TableHead className="text-xs">Clarity</TableHead>
                  <TableHead className="text-xs">Cut</TableHead>
                  <TableHead className="text-xs">Shape</TableHead>
                  <TableHead className="text-xs">Fluorescence</TableHead>
                  <TableHead className="text-xs">GIA Report #</TableHead>
                  <TableHead className="text-xs">Weight</TableHead>
                  <TableHead className="text-xs">Dimensions</TableHead>
                  <TableHead className="text-xs">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id} className="hover:bg-muted/20">
                    <TableCell className="p-2">
                      <img src={product.image} alt={product.name} className="w-12 h-12 object-cover" />
                    </TableCell>
                    <TableCell className="text-xs font-mono text-muted-foreground">{product.id}</TableCell>
                    <TableCell className="text-xs font-medium text-foreground min-w-[140px]">{product.name}</TableCell>
                    <TableCell className="text-xs capitalize">{product.category.replace("-", " ")}</TableCell>
                    <TableCell className="text-xs capitalize">{product.type}</TableCell>
                    <TableCell><PlaceholderCell value={product.price} label="Set price" /></TableCell>
                    <TableCell><PlaceholderCell value={product.material} label="Set material" /></TableCell>
                    <TableCell><PlaceholderCell value={product.diamond?.carat} label="Set carat" /></TableCell>
                    <TableCell><PlaceholderCell value={product.diamond?.color} label="Set color" /></TableCell>
                    <TableCell><PlaceholderCell value={product.diamond?.clarity} label="Set clarity" /></TableCell>
                    <TableCell><PlaceholderCell value={product.diamond?.cut} label="Set cut" /></TableCell>
                    <TableCell><PlaceholderCell value={product.diamond?.shape} label="Set shape" /></TableCell>
                    <TableCell><PlaceholderCell value={product.diamond?.fluorescence} label="Set fluor." /></TableCell>
                    <TableCell><PlaceholderCell value={product.gia?.reportNumber} label="Set GIA #" /></TableCell>
                    <TableCell><PlaceholderCell value={product.weight} label="Set weight" /></TableCell>
                    <TableCell><PlaceholderCell value={product.dimensions} label="Set dims" /></TableCell>
                    <TableCell><StatusBadge product={product} /></TableCell>
                  </TableRow>
                ))}
                {filteredProducts.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={17} className="text-center text-muted-foreground py-8">
                      No products found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        )}

        {/* Videos Table */}
        {(activeTab === "videos" || activeTab === "all") && (
          <div className="border border-border overflow-x-auto">
            <div className="px-4 py-3 bg-muted/30 border-b border-border">
              <h2 className="text-sm font-medium text-foreground">Videos ({filteredVideos.length})</h2>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">ID</TableHead>
                  <TableHead className="text-xs">Title</TableHead>
                  <TableHead className="text-xs">File</TableHead>
                  <TableHead className="text-xs">Related Product</TableHead>
                  <TableHead className="text-xs">Description</TableHead>
                  <TableHead className="text-xs">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredVideos.map((video) => (
                  <TableRow key={video.id} className="hover:bg-muted/20">
                    <TableCell className="text-xs font-mono text-muted-foreground">{video.id}</TableCell>
                    <TableCell className="text-xs font-medium">{video.title}</TableCell>
                    <TableCell className="text-xs font-mono text-muted-foreground">{video.url}</TableCell>
                    <TableCell>
                      <PlaceholderCell
                        value={video.relatedProductId}
                        label="Link to product"
                      />
                    </TableCell>
                    <TableCell>
                      <PlaceholderCell value={video.description} label="Add description" />
                    </TableCell>
                    <TableCell>
                      {isPlaceholder(video.description)
                        ? <span className="text-xs px-2 py-0.5 rounded-full bg-destructive/10 text-destructive">Incomplete</span>
                        : <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">Complete</span>
                      }
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {/* Legend */}
        <div className="mt-8 p-4 border border-border bg-muted/10">
          <h3 className="text-sm font-medium text-foreground mb-3">Field Guide</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs text-muted-foreground">
            <div><strong>Price:</strong> In ₪ (NIS) — e.g. ₪12,500</div>
            <div><strong>Material:</strong> 14K/18K White/Yellow/Rose Gold, Platinum</div>
            <div><strong>Carat:</strong> Total carat weight — e.g. 1.52 ct</div>
            <div><strong>Color:</strong> GIA scale D–Z</div>
            <div><strong>Clarity:</strong> FL, IF, VVS1, VVS2, VS1, VS2, SI1, SI2, I1–I3</div>
            <div><strong>Cut:</strong> Excellent, Very Good, Good, Fair</div>
            <div><strong>Shape:</strong> Round, Princess, Oval, Cushion, Pear, Emerald, Marquise, Radiant, Asscher, Heart</div>
            <div><strong>Fluorescence:</strong> None, Faint, Medium, Strong, Very Strong</div>
            <div><strong>GIA Report #:</strong> 10-digit GIA certificate number</div>
            <div><strong>Weight:</strong> Metal weight in grams — e.g. 4.2g</div>
            <div><strong>Dimensions:</strong> L × W × H in mm — e.g. 8.2 × 5.1 × 3.4 mm</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Inventory;
