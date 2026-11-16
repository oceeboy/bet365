import { CashoutPage } from '@/components/cashout/cashout';

type PageProps = {
  searchParams: Promise<{
    word?: string;
    od?: string;
  }>;
};

export default async function CashoutMAinPage({ searchParams }: PageProps) {
  const { word, od } = await searchParams;

  return (
    <div className="text-white">
      <CashoutPage word={word ?? 'Thisted FC 2-0'} />
    </div>
  );
}
