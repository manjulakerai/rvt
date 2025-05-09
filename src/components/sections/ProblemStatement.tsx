import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
const ProblemStatement = () => {
  const problems = ["Navigating complex policy landscapes", "Creating meaningful community connections", "Developing authentic, impactful organisational strategies"];
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Are you ready to elevate, co-create and execute meaningful change? </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => <Card key={index} className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-lime-800">
                    {index === 0 ? "Navigating" : index === 1 ? "Connections" : "Strategies"}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">{problem}</p>
              </CardContent>
            </Card>)}
        </div>
        <div className="text-center mt-8">
          <p className="text-xl mb-4">You're not alone. Renee's advisory services are designed to solve your most challenging business transformation needs.</p>
        </div>
      </div>
    </section>;
};
export default ProblemStatement;