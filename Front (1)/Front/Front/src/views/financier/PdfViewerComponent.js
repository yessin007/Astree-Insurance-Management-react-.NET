import { useEffect, useRef, useState } from "react";

export default function PdfViewerComponent(props) {
const containerRef = useRef(null);

useEffect(() => {
    var instance;
    var PSPDFKit;
	const container = containerRef.current;
	(async function() {
		PSPDFKit = await import("pspdfkit");
		PSPDFKit.unload(container)
		
		instance =await PSPDFKit.load({
		// Container where PSPDFKit should be mounted.
		container,
		// The document to open.
		document: props.document,
		// Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
		baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`
		});
        const annotations = await instance.getAnnotations(0);
        const annotation = annotations.get(0);
        await instance.delete(annotation);
        
	})();

	return () => PSPDFKit && PSPDFKit.unload(container);
}, []);


return (
	<div ref={containerRef} style={{ width: "100%", height: "100vh"}}/>
);
}