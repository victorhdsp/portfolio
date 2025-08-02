declare module "react-mermaid2" {
  import React from "react";

  interface MermaidProps {
    chart: string;
    config?: Record<string, unknown>;
    className?: string;
  }

  const Mermaid: React.FC<MermaidProps>;

  export default Mermaid;
}
