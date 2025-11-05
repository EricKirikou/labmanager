import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';

const AuditTrail = () => {
  const { data: auditTrail = [] } = useQuery({
    queryKey: ['audit-trail'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('audit_trail')
        .select('*, deleted_by_profile:profiles!audit_trail_deleted_by_fkey(full_name)')
        .order('deleted_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold">Audit Trail</h2>
        <p className="text-muted-foreground">Track all deleted reports</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Deleted Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Deleted By</TableHead>
                <TableHead>Deleted At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {auditTrail.map((entry: any) => (
                <TableRow key={entry.id}>
                  <TableCell className="font-medium">{entry.report_title}</TableCell>
                  <TableCell className="max-w-md truncate">{entry.report_description}</TableCell>
                  <TableCell>{entry.deleted_by_profile?.full_name}</TableCell>
                  <TableCell>{format(new Date(entry.deleted_at), 'MMM dd, yyyy HH:mm')}</TableCell>
                </TableRow>
              ))}
              {auditTrail.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-muted-foreground">
                    No deleted reports found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuditTrail;