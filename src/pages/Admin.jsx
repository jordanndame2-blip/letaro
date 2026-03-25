// src/pages/Admin.jsx
import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, Users, TrendingUp, Calendar, 
  Clock, CheckCircle, XCircle, Eye, Trash2,
  DollarSign, Package, Coffee, Star, Settings,
  Download, Printer, Search, Filter, Plus
} from 'lucide-react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [dateFilter, setDateFilter] = useState('today');
  const [searchTerm, setSearchTerm] = useState('');

  // Données simulées des commandes
  useEffect(() => {
    // Récupérer les commandes depuis localStorage ou données simulées
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    } else {
      // Données simulées
      const mockOrders = [
        {
          id: 'CMD-001',
          date: '2024-03-25 12:30:00',
          customer: 'Sophie Martin',
          phone: '+33 6 12 34 56 78',
          items: [
            { name: 'Poulet DG', quantity: 2, price: '12 500' },
            { name: 'Jus de Bissap', quantity: 3, price: '1 500' }
          ],
          total: '29 500',
          status: 'completed',
          paymentMethod: 'cash',
          deliveryMethod: 'delivery',
          address: '123 Rue de Paris, 75001 Paris'
        },
        {
          id: 'CMD-002',
          date: '2024-03-25 13:15:00',
          customer: 'Jean Dupont',
          phone: '+33 6 98 76 54 32',
          items: [
            { name: 'Ndolé', quantity: 1, price: '8 500' },
            { name: 'Poisson Braisé', quantity: 1, price: '15 000' }
          ],
          total: '23 500',
          status: 'pending',
          paymentMethod: 'card',
          deliveryMethod: 'takeaway',
          address: ''
        },
        {
          id: 'CMD-003',
          date: '2024-03-25 19:45:00',
          customer: 'Marie Lambert',
          phone: '+33 6 45 67 89 01',
          items: [
            { name: 'Brochettes de Bœuf', quantity: 2, price: '6 500' },
            { name: 'Fondant au Chocolat', quantity: 1, price: '4 500' }
          ],
          total: '17 500',
          status: 'preparing',
          paymentMethod: 'mobile',
          deliveryMethod: 'dinein',
          address: ''
        }
      ];
      setOrders(mockOrders);
      localStorage.setItem('orders', JSON.stringify(mockOrders));
    }
  }, []);

  // Statistiques
  const stats = {
    todayRevenue: '125 000',
    todayOrders: 12,
    totalOrders: 245,
    averageOrder: '10 500',
    pendingOrders: orders.filter(o => o.status === 'pending').length,
    preparingOrders: orders.filter(o => o.status === 'preparing').length,
    completedOrders: orders.filter(o => o.status === 'completed').length
  };

  // Filtrer les commandes
  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = dateFilter === 'today' ? 
      order.date.split(' ')[0] === new Date().toISOString().split('T')[0] : true;
    return matchesSearch && matchesDate;
  });

  // Mettre à jour le statut d'une commande
  const updateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  // Supprimer une commande
  const deleteOrder = (orderId) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette commande ?')) {
      const updatedOrders = orders.filter(order => order.id !== orderId);
      setOrders(updatedOrders);
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
    }
  };

  // Exporter les commandes
  const exportOrders = () => {
    const data = JSON.stringify(orders, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `commandes_${new Date().toISOString()}.json`;
    a.click();
  };

  // Imprimer le reçu
  const printReceipt = (order) => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Reçu Commande ${order.id}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            .receipt { max-width: 300px; margin: 0 auto; }
            .header { text-align: center; border-bottom: 1px dashed #ccc; padding-bottom: 10px; }
            .item { display: flex; justify-content: space-between; margin: 5px 0; }
            .total { font-weight: bold; border-top: 1px solid #ccc; margin-top: 10px; padding-top: 10px; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="receipt">
            <div class="header">
              <h2>Restaurant Africain</h2>
              <p>${order.date}</p>
              <p>Commande: ${order.id}</p>
            </div>
            ${order.items.map(item => `
              <div class="item">
                <span>${item.name} x${item.quantity}</span>
                <span>${parseInt(item.price) * item.quantity} FCFA</span>
              </div>
            `).join('')}
            <div class="total">
              <div class="item">
                <span>Total</span>
                <span>${order.total} FCFA</span>
              </div>
            </div>
            <div class="footer">
              <p>Merci de votre visite !</p>
            </div>
          </div>
        </body>
      </html>
    `);
    printWindow.print();
  };

  // Composant pour la carte de statistique
  const StatCard = ({ title, value, icon, color, trend }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
          {trend && (
            <p className="text-green-500 text-xs mt-2">+{trend}% vs hier</p>
          )}
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          {icon}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <Navbar /> */}
      
      {/* Header Admin */}
      <div className="bg-orange-500 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">Tableau de bord Admin</h1>
          <p className="text-orange-100 mt-1">Gérez votre restaurant en temps réel</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation des onglets */}
        <div className="flex flex-wrap gap-2 mb-8 border-b pb-4">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'dashboard'
                ? 'bg-orange-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <TrendingUp className="w-4 h-4 inline mr-2" />
            Tableau de bord
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'orders'
                ? 'bg-orange-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <ShoppingBag className="w-4 h-4 inline mr-2" />
            Commandes
          </button>
          <button
            onClick={() => setActiveTab('menu')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'menu'
                ? 'bg-orange-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Package className="w-4 h-4 inline mr-2" />
            Menu
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'settings'
                ? 'bg-orange-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Settings className="w-4 h-4 inline mr-2" />
            Paramètres
          </button>
        </div>

        {/* Dashboard */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard 
                title="Recette du jour" 
                value={`${stats.todayRevenue} FCFA`} 
                icon={<DollarSign className="w-6 h-6 text-white" />}
                color="bg-green-500"
                trend="12"
              />
              <StatCard 
                title="Commandes aujourd'hui" 
                value={stats.todayOrders} 
                icon={<ShoppingBag className="w-6 h-6 text-white" />}
                color="bg-blue-500"
                trend="8"
              />
              <StatCard 
                title="Commandes en attente" 
                value={stats.pendingOrders} 
                icon={<Clock className="w-6 h-6 text-white" />}
                color="bg-yellow-500"
              />
              <StatCard 
                title="Panier moyen" 
                value={`${stats.averageOrder} FCFA`} 
                icon={<TrendingUp className="w-6 h-6 text-white" />}
                color="bg-purple-500"
              />
            </div>

            {/* Graphique rapide */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-800 mb-4">Commandes cette semaine</h3>
              <div className="flex justify-between items-end h-40">
                {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day, idx) => (
                  <div key={day} className="text-center flex-1">
                    <div className="bg-orange-500 rounded-t-lg mx-auto" style={{ 
                      height: `${Math.random() * 100 + 20}px`, 
                      width: '80%' 
                    }}></div>
                    <p className="text-sm text-gray-600 mt-2">{day}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dernières commandes */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-800 mb-4">Dernières commandes</h3>
              <div className="space-y-3">
                {filteredOrders.slice(0, 5).map(order => (
                  <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-semibold">{order.customer}</p>
                      <p className="text-sm text-gray-500">{order.id} • {order.date.split(' ')[1]}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-orange-500">{order.total} FCFA</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        order.status === 'completed' ? 'bg-green-100 text-green-600' :
                        order.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-blue-100 text-blue-600'
                      }`}>
                        {order.status === 'completed' ? 'Terminé' :
                         order.status === 'pending' ? 'En attente' : 'En préparation'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Commandes */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            {/* Filtres */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[200px]">
                  <div className="relative">
                    <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Rechercher une commande..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
                <select
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="today">Aujourd'hui</option>
                  <option value="all">Toutes les dates</option>
                </select>
                <button
                  onClick={exportOrders}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Exporter
                </button>
              </div>
            </div>

            {/* Liste des commandes */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Commande</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Client</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Statut</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredOrders.map(order => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">{order.id}</td>
                        <td className="px-6 py-4">{order.customer}</td>
                        <td className="px-6 py-4 text-sm">{order.date}</td>
                        <td className="px-6 py-4 font-bold text-orange-500">{order.total} FCFA</td>
                        <td className="px-6 py-4">
                          <select
                            value={order.status}
                            onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                            className={`text-xs px-2 py-1 rounded-full ${
                              order.status === 'completed' ? 'bg-green-100 text-green-600' :
                              order.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                              'bg-blue-100 text-blue-600'
                            }`}
                          >
                            <option value="pending">En attente</option>
                            <option value="preparing">En préparation</option>
                            <option value="completed">Terminé</option>
                          </select>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button
                              onClick={() => setSelectedOrder(order)}
                              className="text-blue-500 hover:text-blue-700"
                            >
                              <Eye className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => printReceipt(order)}
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <Printer className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => deleteOrder(order.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Menu Management */}
        {activeTab === 'menu' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Gestion du Menu</h2>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Ajouter un plat
              </button>
            </div>
            <p className="text-gray-500 text-center py-12">
              Interface de gestion du menu à venir...
            </p>
          </div>
        )}

        {/* Settings */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Paramètres du restaurant</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom du restaurant</label>
                <input type="text" defaultValue="Restaurant Africain" className="w-full px-4 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                <input type="tel" defaultValue="+33 1 23 45 67 89" className="w-full px-4 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" defaultValue="contact@restaurant.com" className="w-full px-4 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                <input type="text" defaultValue="123 Rue de Paris, 75001 Paris" className="w-full px-4 py-2 border rounded-lg" />
              </div>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
                Enregistrer les modifications
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal Détails Commande */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-xs bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">Commande {selectedOrder.id}</h3>
                <button onClick={() => setSelectedOrder(null)} className="text-gray-500 hover:text-gray-700">
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Client</p>
                    <p className="font-semibold">{selectedOrder.customer}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Téléphone</p>
                    <p className="font-semibold">{selectedOrder.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-semibold">{selectedOrder.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Mode de paiement</p>
                    <p className="font-semibold">{selectedOrder.paymentMethod}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-2">Articles commandés</p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    {selectedOrder.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between py-2 border-b last:border-0">
                        <span>{item.name} x{item.quantity}</span>
                        <span className="font-semibold">{parseInt(item.price) * item.quantity} FCFA</span>
                      </div>
                    ))}
                    <div className="flex justify-between pt-2 mt-2 border-t font-bold">
                      <span>Total</span>
                      <span className="text-orange-500">{selectedOrder.total} FCFA</span>
                    </div>
                  </div>
                </div>

                {selectedOrder.deliveryMethod === 'delivery' && (
                  <div>
                    <p className="text-sm text-gray-500">Adresse de livraison</p>
                    <p className="font-semibold">{selectedOrder.address}</p>
                  </div>
                )}

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => printReceipt(selectedOrder)}
                    className="flex-1 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600"
                  >
                    Imprimer
                  </button>
                  <button
                    onClick={() => setSelectedOrder(null)}
                    className="flex-1 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Admin;