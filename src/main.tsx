import { createRoot } from 'react-dom/client';

import { Root } from '@/Root';

const rootId = 'root';
createRoot(document.getElementById(rootId)!).render(<Root/>);