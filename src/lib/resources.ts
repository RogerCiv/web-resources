import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

// Tipos para los recursos
export type RecursoData = CollectionEntry<'frameworks'>['data'] | 
                         CollectionEntry<'ui-libraries'>['data'] |
                         CollectionEntry<'css-frameworks'>['data'] |
                         CollectionEntry<'typography'>['data'] |
                         CollectionEntry<'icons'>['data'] |
                         CollectionEntry<'tools'>['data'] |
                         CollectionEntry<'hosting'>['data'] |
                         CollectionEntry<'databases'>['data'] |
                         CollectionEntry<'apis'>['data'] |
                         CollectionEntry<'testing'>['data'] |
                         CollectionEntry<'performance'>['data'] |
                         CollectionEntry<'analytics'>['data'] |
                         CollectionEntry<'design'>['data'] |
                         CollectionEntry<'learning'>['data'];

export interface RecursoCompleto {
  id: string;
  categoria: string;
  data: RecursoData;
}

// Obtener todos los recursos de todas las colecciones
export async function getTodosLosRecursos(): Promise<RecursoCompleto[]> {
  const colecciones = [
    'frameworks', 'ui-libraries', 'css-frameworks', 'typography',
    'icons', 'tools', 'hosting', 'databases', 'apis', 'testing',
    'performance', 'analytics', 'design', 'learning'
  ];
  
  const todosLosRecursos: RecursoCompleto[] = [];
  
  for (const categoria of colecciones) {
    try {
      const recursos = await getCollection(categoria as any);
      recursos.forEach(recurso => {
        todosLosRecursos.push({
          id: recurso.id,
          categoria,
          data: recurso.data as RecursoData
        });
      });
    } catch (error) {
      console.warn(`No se pudo cargar la colección: ${categoria}`);
    }
  }
  
  return todosLosRecursos;
}

// Mapeo de categorías a nombres legibles
export const categoriaLabels: Record<string, string> = {
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