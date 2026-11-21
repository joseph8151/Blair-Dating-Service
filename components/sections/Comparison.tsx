import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { comparisonColumns, comparisonRows } from "@/data/comparison";
import { cn } from "@/lib/utils";

// Blair's column is tinted end to end so the difference reads at a glance.
export function Comparison() {
  return (
    <section id="compare" className="border-t border-line py-20 sm:py-28">
      <Container>
        <SectionHeading index="02" title="소개팅 앱, 결혼정보회사와 다른 점" />

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left font-body text-sm">
            <thead>
              <tr>
                <th className="w-[16%] pb-5 pr-4 font-normal" scope="col">
                  <span className="sr-only">항목</span>
                </th>
                {comparisonColumns.map((col, i) => (
                  <th
                    key={col}
                    scope="col"
                    className={cn(
                      "px-5 pb-5 pt-6 align-bottom font-normal",
                      i === 2
                        ? "bg-[#efeae3] font-display text-xl font-medium tracking-[-0.02em] text-ink"
                        : "text-[13px] text-ink-light"
                    )}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border-t border-ink">
              {comparisonRows.map((row) => (
                <tr key={row.label} className="border-b border-line align-top">
                  <th scope="row" className="py-6 pr-4 text-[13px] font-normal text-ink-light">
                    {row.label}
                  </th>
                  {row.values.map((value, i) => (
                    <td
                      key={i}
                      className={cn(
                        "px-5 py-6 leading-[1.7]",
                        i === 2 ? "bg-[#efeae3] text-[15px] font-medium text-ink" : "text-ink-light"
                      )}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
