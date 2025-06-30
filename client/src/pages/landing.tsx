import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Shield, Building } from "lucide-react";

export default function Landing() {
  const handleLogin = () => {
    window.location.href = "/api/login";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <Card className="shadow-lg">
          <CardContent className="pt-8 pb-8 px-8">
            <div className="text-center mb-8">
              <div className="mx-auto h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-white text-xl" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Employee Management System</h1>
              <p className="text-gray-600 mt-2">Secure access for administrators</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Shield className="text-blue-600" size={20} />
                <span className="text-sm text-gray-700">Secure admin authentication</span>
              </div>
              <div className="flex items-center space-x-3">
                <Building className="text-blue-600" size={20} />
                <span className="text-sm text-gray-700">Complete employee management</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="text-blue-600" size={20} />
                <span className="text-sm text-gray-700">Professional dashboard interface</span>
              </div>
            </div>
            
            <Button 
              onClick={handleLogin}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
            >
              Sign In as Administrator
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
