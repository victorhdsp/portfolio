"use client";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Mermaid from "react-mermaid2" 

interface ReadMarkdownProps {
    markdown: string;
}
export default function ReadMarkdown({ markdown }: ReadMarkdownProps) { 
    const mermaidConfig = {
        theme: 'default',
    };
    
    return (
        <ReactMarkdown
            remarkPlugins={[
                remarkGfm,
            ]}
            components={{
                code({ ...props }) {
                    if (props.className?.includes('language-mermaid')) {
                        return <Mermaid config={mermaidConfig} chart={props.children as string} />;
                    }
                    return <code {...props} />;
                },
            }}
        >
            {markdown}
        </ReactMarkdown>
    )
}