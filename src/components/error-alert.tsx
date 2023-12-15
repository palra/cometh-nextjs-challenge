import { AlertOctagon } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";
import { Button } from "./ui/button";

export function ErrorAlert({ onTryAgain }: { onTryAgain: () => void }) {
  return (
    <Alert>
      <AlertOctagon className="h-4 w-4" />
      <AlertTitle>Mince ...</AlertTitle>
      <AlertDescription>
        <p>Une erreur est survenue pendant le chargement des données.</p>
        <Button onClick={onTryAgain}>Essayer à nouveau</Button>
      </AlertDescription>
    </Alert>
  );
}
