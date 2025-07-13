import { useQuery } from "@tanstack/react-query";

import { getCategorizationResponse } from "./customer-service-workflow.action";

/**
 * Ein benutzerdefinierter Hook zum Abrufen der Kategorisierungsantwort für eine bestimmte Frage.
 * @param question Die Frage, die an den Workflow-Dienst gesendet werden soll.
 * @returns Das Ergebnis der Abfrage von @tanstack/react-query, einschließlich Daten, Ladezustand und Fehler.
 */
export const useCategorizationResponse = (question: string) => {
  return useQuery({
    // Der Abfrageschlüssel identifiziert diese Abfrage eindeutig.
    // Er enthält die Frage, sodass die Abfrage erneut ausgeführt wird, wenn sich die Frage ändert.
    queryKey: ['categorization', question],

    // Die Abfragefunktion ist die asynchrone Funktion, die die Daten abruft.
    queryFn: () => getCategorizationResponse(question),

    // Die Abfrage sollte nur aktiviert werden, wenn eine Frage vorhanden ist.
    // Dies verhindert unnötige API-Aufrufe mit einer leeren Zeichenfolge.
    enabled: !!question,
  });
};