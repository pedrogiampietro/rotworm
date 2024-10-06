"use client";

import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderNav,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/dashboard/page";
import { MarketDataTable } from "./_components/market-data-table";
import { ItemUpsertSheet } from "./_components/market-upsert-sheet";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function Page() {
  const { data: session } = useSession();

  if (!session) {
    redirect("/");
  }

  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Market</DashboardPageHeaderTitle>
        <DashboardPageHeaderNav>
          <DashboardPageHeaderNav>
            <ItemUpsertSheet sellerId={session?.user?.id}>
              <Button variant="outline" size="sm">
                <PlusIcon className="w-4 h-4 mr-3" />
                Add item market
              </Button>
            </ItemUpsertSheet>
          </DashboardPageHeaderNav>
        </DashboardPageHeaderNav>
      </DashboardPageHeader>
      <DashboardPageMain>
        <MarketDataTable data={[]} />
      </DashboardPageMain>
    </DashboardPage>
  );
}
