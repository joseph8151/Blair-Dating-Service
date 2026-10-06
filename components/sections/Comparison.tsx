import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { comparisonColumns, comparisonRows } from "@/data/comparison";
import { cn } from "@/lib/utils";

export function Comparison() {
  return (
    <section id="compare" className="border-t border-line py-20 sm:py-28">
      <Container>
        <SectionHeading title="소개팅 앱, 결혼정보회사와 다른 점" />

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left font-body text-sm">
            <thead>
              <tr className="border-b border-ink">
                <th className="w-[18%] py-4 pr-4 font-normal text-ink-light" scope="col">
                  <span className="sr-only">항목</span>
                </th>
                {comparisonColumns.map((col, i) => (
                  <th
                    key={col}
                    scope="col"
                    className={cn(
                      "py-4 pr-4 font-medium",
                      i === 2 ? "text-accent" : "text-ink-light"
                    )}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="border-b border-line align-top">
                  <th scope="row" className="py-5 pr-4 font-normal text-ink-light">
                    {row.label}
                  </th>
                  {row.values.map((value, i) => (
                    <td
                      key={i}
                      className={cn(
                        "py-5 pr-4 leading-[1.7]",
                        i === 2 ? "font-medium text-ink" : "text-ink-light"
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
