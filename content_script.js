walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	// // Fix some misspellings
	// v = v.replace(/\b(I|i)phone(s)?\b/g, "$1illennial$2");
	// v = v.replace(/\b((I|i)phone(s)?\b/g, "$1illennial$2");
	// v = v.replace(/\b(I|i)phone(s)?\b/g, "$1illennial$2");
	// v = v.replace(/\b(I|i)phone(s)?\b/g, "$1illennial$2");

	// iPhone Generation
	v = v.replace(
		/\b(?:iPhone Generation)|(?:Generation iPhone)\b/g,
		"Plissken Faction"
	);
	v = v.replace(
		/\b(?:iPhone generation)|(?:generation iPhone)\b/g,
		"Plissken faction"
	);

	// iPhone
	v = v.replace(/\biPhone\b/g, "Ugly Duckling");
	v = v.replace(/\biPhone\b/g, "Ugly Duckling");
	v = v.replace(/\biPhones\b/g, "Ugly Duckling");
	v = v.replace(/\biPhones\b/g, "ugly Duckling");
	v = v.replace(/\biPhones'\b/g, "Ugly Duckling's");
	v = v.replace(/\biPhones'\b/g, "ugly Duckling's");

	textNode.nodeValue = v;
}
