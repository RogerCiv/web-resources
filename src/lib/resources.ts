import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

// Define los nombres de colecciones como un tipo literal
type CollectionName = 'frameworks' | 'ui-libraries' | 'css-frameworks' | 'typography' | 
                     'icons' | 'tools' | 'hosting' | 'databases' | 'apis' | 'testing' | 
                     'performance' | 'analytics' | 'design' | 'learning';

// Tipos para los recursos
export type RecursoData = CollectionEntry<CollectionName>['data'];

export interface RecursoCompleto {
  id: string;
  categoria: string;
  data: RecursoData;
}

// Obtener todos los recursos de todas las colecciones
export async function getTodosLosRecursos(): Promise<RecursoCompleto[]> {
  const colecciones: CollectionName[] = [
    'frameworks', 'ui-libraries', 'css-frameworks', 'typography',
    'icons', 'tools', 'hosting', 'databases', 'apis', 'testing',
    'performance', 'analytics', 'design', 'learning'
  ];
  
  const todosLosRecursos: RecursoCompleto[] = [];
  
  for (const categoria of colecciones) {
    try {
      const recursos = await getCollection(categoria);
      recursos.forEach(recurso => {
        todosLosRecursos.push({
          id: recurso.id,
          categoria,
          data: recurso.data
        });
      });
    } catch (error) {
      console.warn(`No se pudo cargar la colección: ${categoria}`);
    }
  }
  
  return todosLosRecursos;
}

// Mapeo de categorías a nombres legibles
export const categoriaLabels: Record<CollectionName, string> = {
  'frameworks': 'Frameworks',
  'ui-libraries': 'Librerías UI',
  'css-frameworks': 'Frameworks CSS',
  'typography': 'Tipografías',
  'icons': 'Iconos',
  'tools': 'Herramientas',
  'hosting': 'Hosting & Deploy',
  'databases': 'Bases de Datos',
  'apis': 'APIs & Servicios',
  'testing': 'Testing',
  'performance': 'Performance',
  'analytics': 'Analytics',
  'design': 'Diseño',
  'learning': 'Aprendizaje'
};