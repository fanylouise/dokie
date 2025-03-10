import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import '../styles/Spa.css'

export default function DocumentManager() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    date: "",
  });
  const [history, setHistory] = useState([
    { id: 1, name: "Contrato A", date: "2024-02-20" },
    { id: 2, name: "Nota Fiscal 123", date: "2024-02-18" },
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHistory([...history, { id: history.length + 1, ...formData }]);
    setFormData({ name: "", type: "", date: "" });
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar className="w-1/4 p-4 bg-gray-100">Menu</Sidebar>

        {/* Main Content */}
        <div className="flex-1 p-6 flex flex-col gap-6">
          {/* Document Form */}
          <Card>
            <CardContent>
              <h2 className="text-xl font-bold mb-4">Cadastrar Documento</h2>
              <form onSubmit={handleSubmit} className="grid gap-4">
                <Input
                  placeholder="Nome do Documento"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  placeholder="Tipo de Documento"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
                <Button type="submit">Salvar</Button>
              </form>
            </CardContent>
          </Card>

          {/* Calendar and History */}
          <div className="grid grid-cols-2 gap-6">
            {/* Calendar */}
            <Card>
              <CardContent>
                <h2 className="text-xl font-bold mb-4">Calendário</h2>
                <Calendar />
              </CardContent>
            </Card>

            {/* Disposal History */}
            <Card>
              <CardContent>
                <h2 className="text-xl font-bold mb-4">Histórico de Descarte</h2>
                <ul>
                  {history.map((doc) => (
                    <li key={doc.id} className="border-b py-2">
                      {doc.name} - {doc.date}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
