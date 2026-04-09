import React, { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, Landmark, CircleCheck, AlertTriangle, Wallet, Calculator, Link2 } from "lucide-react";

function SectionHeader({ icon: Icon, title, description, badge }: { icon: any; title: string; description: string; badge?: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl border bg-white p-2 shadow-sm">
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
            {badge ? <Badge variant="secondary" className="rounded-full">{badge}</Badge> : null}
          </div>
          <p className="text-sm text-slate-500">{description}</p>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) {
  return (
    <div className="space-y-2">
      <Label className="text-[13px] font-medium text-slate-700">{label}</Label>
      {children}
      {hint ? <p className="text-xs leading-5 text-slate-500">{hint}</p> : null}
    </div>
  );
}

function MiniStatus({ complete, label }: { complete: boolean; label: string }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      {complete ? <CircleCheck className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
      <span className={complete ? "text-slate-700" : "text-slate-600"}>{label}</span>
    </div>
  );
}

export default function Mock401KCompanySettings() {
  const [activeTab, setActiveTab] = useState("overview");

  const completion = useMemo(
    () => [
      { key: "overview", label: "Plan Overview", done: true },
      { key: "contributions", label: "Contributions", done: true },
            { key: "compensation", label: "Compensation Basis", done: false },
      { key: "limits", label: "Validations & Limits", done: true },
      { key: "provider", label: "Provider Mapping", done: false },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-[#f6f7fb] text-slate-900">
      <div className="h-14 border-b bg-[#3d3d3d] px-5 text-white">
        <div className="mx-auto flex h-full max-w-[1500px] items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 font-semibold tracking-wide">
              <div className="h-7 w-7 rounded-full border border-emerald-300/60 bg-emerald-500/20" />
              LUMBER
            </div>
            <div className="hidden gap-8 text-sm text-white/90 md:flex">
              {['Time', 'Pay', 'Scheduler', 'Resources', 'Reports', 'Documents', 'HR'].map((item) => (
                <div key={item} className="flex items-center gap-1">{item}<ChevronDown className="h-4 w-4 opacity-70" /></div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-white/20 px-4 py-2 text-sm">Bryan Construction, Inc.</div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1500px] grid-cols-12 gap-8 px-10 py-8">
        <aside className="col-span-3 rounded-2xl bg-transparent pr-2">
          <div className="mb-6 text-[52px] leading-none font-semibold tracking-tight text-slate-800">Settings</div>
          <div className="rounded-2xl bg-transparent p-2">
            <div className="space-y-6 text-sm">
              <div>
                <div className="mb-3 px-4 font-semibold text-slate-700">Time Tracking</div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between px-4 font-semibold text-slate-800">
                  <span>Payroll</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <div className="space-y-1 pl-2">
                  <div className="rounded-xl bg-slate-200 px-4 py-2 font-semibold text-slate-900">General</div>
                  <div className="rounded-xl px-4 py-2 text-slate-600">Unions</div>
                  <div className="rounded-xl px-4 py-2 text-slate-600">Prevailing Wages</div>
                  <div className="rounded-xl px-4 py-2 text-slate-600">GL Download</div>
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between px-4 font-semibold text-slate-700">
                  <span>Onboarding</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
              <div className="px-4 text-slate-700">Company Info</div>
              <div className="px-4 text-slate-700">Public APIs</div>
            </div>
          </div>
        </aside>

        <main className="col-span-9">
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between gap-4 border-b pb-6">
                <div>
                  <h1 className="text-4xl font-semibold tracking-tight">Payroll</h1>
                  <p className="mt-1 text-base text-slate-500">Manage your preferences</p>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" className="rounded-xl px-5">Cancel</Button>
                  <Button className="rounded-xl px-5">Save</Button>
                </div>
              </div>
            </div>

            <Card className="overflow-hidden rounded-3xl border shadow-sm">
              <CardHeader className="border-b bg-white/80 pb-5">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <CardTitle className="text-3xl tracking-tight">401(k) Configuration</CardTitle>
                    <CardDescription className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                      Configure company-level 401(k) settings used by Lumber for downstream payroll, compliance, and provider data mapping.
                    </CardDescription>
                  </div>
                  <div className="rounded-2xl border bg-slate-50 px-4 py-3 text-sm">
                    <div className="mb-2 font-medium text-slate-700">Configuration Summary</div>
                    <div className="grid gap-2 md:grid-cols-2">
                      {completion.map((item) => (
                        <MiniStatus key={item.key} complete={item.done} label={item.label} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <div className="border-b px-6 pt-4">
                    <TabsList className="h-auto w-full justify-start gap-2 rounded-none bg-transparent p-0">
                      <TabsTrigger value="overview" className="rounded-t-xl border border-b-0 px-4 py-3 data-[state=active]:bg-slate-100">Plan Overview</TabsTrigger>
                      <TabsTrigger value="contributions" className="rounded-t-xl border border-b-0 px-4 py-3 data-[state=active]:bg-slate-100">Contributions</TabsTrigger>                      <TabsTrigger value="compensation" className="rounded-t-xl border border-b-0 px-4 py-3 data-[state=active]:bg-slate-100">Compensation Basis</TabsTrigger>
                      <TabsTrigger value="limits" className="rounded-t-xl border border-b-0 px-4 py-3 data-[state=active]:bg-slate-100">Validations & Limits</TabsTrigger>
                      <TabsTrigger value="provider" className="rounded-t-xl border border-b-0 px-4 py-3 data-[state=active]:bg-slate-100">Provider Mapping</TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="overview" className="m-0 p-6">
                    <Card className="rounded-2xl">
                      <CardContent className="space-y-6 p-6">
                        <SectionHeader icon={Landmark} title="Plan Overview" description="Define the parent 401(k) setup for the company." badge="Required" />
                        <div className="grid gap-5 md:grid-cols-2">
                          <Field label="Plan Name">
                            <Input defaultValue="Bryan Construction 401(k) Plan" className="h-11 rounded-xl" />
                          </Field>
                          <Field label="Plan Number">
                            <Input defaultValue="001" className="h-11 rounded-xl" />
                          </Field>
                          <Field label="Plan Year">
                            <Select defaultValue="calendar">
                              <SelectTrigger className="h-11 rounded-xl"><SelectValue /></SelectTrigger>
                              <SelectContent>
                                <SelectItem value="calendar">Calendar Year</SelectItem>
                                <SelectItem value="fiscal">Fiscal Year</SelectItem>
                              </SelectContent>
                            </Select>
                          </Field>
                          <Field label="Plan Status">
                            <Select defaultValue="active">
                              <SelectTrigger className="h-11 rounded-xl"><SelectValue /></SelectTrigger>
                              <SelectContent>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="draft">Draft</SelectItem>
                                <SelectItem value="terminated">Terminated</SelectItem>
                              </SelectContent>
                            </Select>
                          </Field>
                          <Field label="Effective Start">
                            <Input defaultValue="01/01/2026" className="h-11 rounded-xl" />
                          </Field>
                          <Field label="Effective End">
                            <Input placeholder="MM/DD/YYYY" className="h-11 rounded-xl" />
                          </Field>
                          <Field label="Plan Type">
                            <Select defaultValue="traditional">
                              <SelectTrigger className="h-11 rounded-xl"><SelectValue /></SelectTrigger>
                              <SelectContent>
                                <SelectItem value="traditional">Traditional 401(k)</SelectItem>
                                <SelectItem value="safe-harbor">Safe Harbor 401(k)</SelectItem>
                                <SelectItem value="auto">Auto Enrollment 401(k)</SelectItem>
                              </SelectContent>
                            </Select>
                          </Field>
                          <Field label="Provider / Destination">
                            <Select defaultValue="paykonnect">
                              <SelectTrigger className="h-11 rounded-xl"><SelectValue /></SelectTrigger>
                              <SelectContent>
                                <SelectItem value="paykonnect">PayKonnect</SelectItem>
                                <SelectItem value="guideline">Guideline</SelectItem>
                                <SelectItem value="custom">Custom Mapping</SelectItem>
                              </SelectContent>
                            </Select>
                          </Field>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="contributions" className="m-0 p-6">
                    <div className="grid gap-6 xl:grid-cols-2">
                      <Card className="rounded-2xl">
                        <CardContent className="space-y-6 p-6">
                          <SectionHeader icon={Wallet} title="Employee Contribution Sources" description="Configure employee sources inside one 401(k) plan." badge="Required" />
                          <div className="space-y-4 rounded-2xl border p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium">Pre-tax 401(k)</div>
                                <div className="text-sm text-slate-500">Employee elective deferral</div>
                              </div>
                              <Switch checked />
                            </div>
                            <Separator />
                            <div className="grid gap-4 md:grid-cols-3">
                              <Field label="Contribution Method">
                                <Select defaultValue="percentage">
                                  <SelectTrigger className="h-11 rounded-xl"><SelectValue /></SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="percentage">Percentage</SelectItem>
                                    <SelectItem value="amount">Amount</SelectItem>
                                  </SelectContent>
                                </Select>
                              </Field>
                              <Field label="Default Value">
                                <Input defaultValue="5" className="h-11 rounded-xl" />
                              </Field>
                              <Field label="Effective Start">
                                <Input defaultValue="01/01/2026" className="h-11 rounded-xl" />
                              </Field>
                            </div>
                          </div>
                          <div className="space-y-4 rounded-2xl border p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium">Roth 401(k)</div>
                                <div className="text-sm text-slate-500">Configured as a source under the same plan</div>
                              </div>
                              <Switch checked />
                            </div>
                            <Separator />
                            <div className="grid gap-4 md:grid-cols-3">
                              <Field label="Contribution Method">
                                <Select defaultValue="percentage">
                                  <SelectTrigger className="h-11 rounded-xl"><SelectValue /></SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="percentage">Percentage</SelectItem>
                                    <SelectItem value="amount">Amount</SelectItem>
                                  </SelectContent>
                                </Select>
                              </Field>
                              <Field label="Default Value">
                                <Input defaultValue="2" className="h-11 rounded-xl" />
                              </Field>
                              <Field label="Effective Start">
                                <Input defaultValue="01/01/2026" className="h-11 rounded-xl" />
                              </Field>
                            </div>
                          </div>                        </CardContent>
                      </Card>

                      <Card className="rounded-2xl">
                        <CardContent className="space-y-6 p-6">
                          <SectionHeader icon={Calculator} title="Employer Contribution Rules" description="Standard and layered contribution setup." badge="Required" />
                          <div className="grid gap-4 md:grid-cols-2">
                            <Field label="Employer Contribution Type">
                              <Select defaultValue="layered">
                                <SelectTrigger className="h-11 rounded-xl"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="standard">Standard Match</SelectItem>
                                  <SelectItem value="layered">Layered Match</SelectItem>
                                </SelectContent>
                              </Select>
                            </Field>
                            <Field label="Effective Start">
                              <Input defaultValue="01/01/2026" className="h-11 rounded-xl" />
                            </Field>
                          </div>
                          <div className="rounded-2xl border p-4">
                            <div className="mb-4 text-sm font-medium text-slate-700">Layered Rules</div>
                            <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
                              <Input defaultValue="100" className="h-11 rounded-xl" />
                              <Input defaultValue="3" className="h-11 rounded-xl" />
                              <div className="flex items-center text-sm text-slate-500">on the first %</div>
                            </div>
                            <div className="mt-3 grid gap-3 md:grid-cols-[1fr_1fr_auto]">
                              <Input defaultValue="50" className="h-11 rounded-xl" />
                              <Input defaultValue="2" className="h-11 rounded-xl" />
                              <div className="flex items-center text-sm text-slate-500">on the next %</div>
                            </div>
                            <Button variant="link" className="mt-3 px-0">+ Add Rule</Button>
                          </div>
                          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                            Roth employer contributions remain hidden unless explicitly supported in product scope.
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  
                  <TabsContent value="compensation" className="m-0 p-6">
                    <Card className="rounded-2xl">
                      <CardContent className="space-y-6 p-6">
                        <SectionHeader icon={Calculator} title="401(k)-Eligible Compensation" description="Map earning codes used for employee and employer calculations." badge="Required" />
                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                          <Field label="Compensation Definition">
                            <Select defaultValue="custom">
                              <SelectTrigger className="h-11 rounded-xl"><SelectValue /></SelectTrigger>
                              <SelectContent>
                                <SelectItem value="w2">W-2 Wages</SelectItem>
                                <SelectItem value="415">415 Compensation</SelectItem>
                                <SelectItem value="3401">3401(a)</SelectItem>
                                <SelectItem value="custom">Custom Mapping</SelectItem>
                              </SelectContent>
                            </Select>
                          </Field>
                          <Field label="Default Employee Basis">
                            <Select defaultValue="included">
                              <SelectTrigger className="h-11 rounded-xl"><SelectValue /></SelectTrigger>
                              <SelectContent>
                                <SelectItem value="included">Included Unless Excluded</SelectItem>
                                <SelectItem value="excluded">Excluded Unless Included</SelectItem>
                              </SelectContent>
                            </Select>
                          </Field>
                          <Field label="Default Employer Basis">
                            <Select defaultValue="included">
                              <SelectTrigger className="h-11 rounded-xl"><SelectValue /></SelectTrigger>
                              <SelectContent>
                                <SelectItem value="included">Included Unless Excluded</SelectItem>
                                <SelectItem value="excluded">Excluded Unless Included</SelectItem>
                              </SelectContent>
                            </Select>
                          </Field>
                          <Field label="Imputed Earnings Handling">
                            <Select defaultValue="custom-review">
                              <SelectTrigger className="h-11 rounded-xl"><SelectValue /></SelectTrigger>
                              <SelectContent>
                                <SelectItem value="custom-review">Require Explicit Mapping</SelectItem>
                                <SelectItem value="include">Include by Default</SelectItem>
                                <SelectItem value="exclude">Exclude by Default</SelectItem>
                              </SelectContent>
                            </Select>
                          </Field>
                        </div>
                        <div className="overflow-hidden rounded-2xl border">
                          <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-4 border-b bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                            <div>Earning Code</div>
                            <div>Type</div>
                            <div>Employee Basis</div>
                            <div>Employer Basis</div>
                          </div>
                          {[
                            ["Regular Wages", "Hourly", true, true],
                            ["Overtime", "Hourly", true, true],
                            ["Signing Bonus", "Bonus", false, false],
                            ["Travel Pay", "Allowance", false, false],
                            ["GTL Imputed Income", "Imputed", false, false],
                          ].map(([name, type, emp, er]) => (
                            <div key={String(name)} className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-4 border-b px-4 py-3 text-sm last:border-b-0">
                              <div>{name}</div>
                              <div className="text-slate-500">{type}</div>
                              <div className="flex items-center gap-3"><Switch checked={Boolean(emp)} /><span>{emp ? 'Included' : 'Excluded'}</span></div>
                              <div className="flex items-center gap-3"><Switch checked={Boolean(er)} /><span>{er ? 'Included' : 'Excluded'}</span></div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="limits" className="m-0 p-6">
                    <div className="grid gap-6 xl:grid-cols-2">
                      <Card className="rounded-2xl">
                        <CardContent className="space-y-6 p-6">
                          <SectionHeader icon={AlertTriangle} title="Annual Limits" description="System-backed references for plan validation." badge="Required" />
                          <div className="grid gap-5 md:grid-cols-2">
                            <Field label="Plan Year Limit Table">
                              <Select defaultValue="2026">
                                <SelectTrigger className="h-11 rounded-xl"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="2026">2026 IRS Limits</SelectItem>
                                  <SelectItem value="2025">2025 IRS Limits</SelectItem>
                                </SelectContent>
                              </Select>
                            </Field>
                                                      </div>
                          <div className="rounded-2xl border bg-slate-50 p-4 text-sm text-slate-700">
                            Combined employee sources should validate together before the configuration is saved.
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="rounded-2xl">
                        <CardContent className="space-y-6 p-6">
                          <SectionHeader icon={CircleCheck} title="Settings Validation Rules" description="Prevent conflicting or incomplete configurations." badge="Required" />
                          <div className="space-y-4">
                            {[
                              'Require at least one active employee contribution source',
                              'Prevent layered rules with overlapping ranges',
                              'Require provider mapping when plan status is Active',
                              'Block save when compensation mapping is incomplete',
                            ].map((rule) => (
                              <label key={rule} className="flex items-center justify-between rounded-xl border p-4 text-sm">
                                <span>{rule}</span>
                                <Switch checked />
                              </label>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="provider" className="m-0 p-6">
                    <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
                      <Card className="rounded-2xl">
                        <CardContent className="space-y-6 p-6">
                          <SectionHeader icon={Link2} title="Provider & Export Mapping" description="Capture downstream mapping without leaving Company Settings." badge="Required" />
                          <div className="grid gap-5 md:grid-cols-2">
                            <Field label="Downstream Provider">
                              <Select defaultValue="paykonnect">
                                <SelectTrigger className="h-11 rounded-xl"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="paykonnect">PayKonnect</SelectItem>
                                  <SelectItem value="guideline">Guideline</SelectItem>
                                  <SelectItem value="vestwell">Vestwell</SelectItem>
                                </SelectContent>
                              </Select>
                            </Field>
                            <Field label="Company External ID">
                              <Input defaultValue="BRY-CON-401K-001" className="h-11 rounded-xl" />
                            </Field>
                            <Field label="Employee Identifier Source">
                              <Select defaultValue="employee-id">
                                <SelectTrigger className="h-11 rounded-xl"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="employee-id">Employee ID</SelectItem>
                                  <SelectItem value="ssn-last4">SSN + Last 4</SelectItem>
                                  <SelectItem value="external">External Worker ID</SelectItem>
                                </SelectContent>
                              </Select>
                            </Field>
                            <Field label="Contribution Mapping Mode">
                              <Select defaultValue="source-based">
                                <SelectTrigger className="h-11 rounded-xl"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="source-based">Source Based</SelectItem>
                                  <SelectItem value="custom-codes">Custom Codes</SelectItem>
                                </SelectContent>
                              </Select>
                            </Field>
                          </div>
                          <div className="overflow-hidden rounded-2xl border">
                            <div className="grid grid-cols-[1.4fr_1fr] gap-4 border-b bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                              <div>Contribution Source</div>
                              <div>Export Code</div>
                            </div>
                            {[
                              ['Pre-tax 401(k)', 'EE_PRE'],
                              ['Roth 401(k)', 'EE_ROTH'],
                              ['Employer Match', 'ER_MATCH'],
                            ].map(([source, code]) => (
                              <div key={String(source)} className="grid grid-cols-[1.4fr_1fr] gap-4 border-b px-4 py-3 text-sm last:border-b-0">
                                <div>{source}</div>
                                <Input defaultValue={String(code)} className="h-10 rounded-xl" />
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="rounded-2xl border-slate-200 bg-slate-50/70">
                        <CardContent className="space-y-5 p-6">
                          <SectionHeader icon={Link2} title="Connected Services" description="Existing connection entry points can live here as config utilities." />
                          <div className="rounded-2xl border bg-white p-4">
                            <div className="mb-3 text-sm font-medium text-slate-700">Guideline</div>
                            <p className="mb-4 text-sm text-slate-500">Launch the connected setup flow if provider-side plan configuration is needed.</p>
                            <Button variant="outline" className="rounded-xl">Connect with Guideline</Button>
                          </div>
                          <div className="rounded-2xl border bg-white p-4">
                            <div className="mb-3 text-sm font-medium text-slate-700">SimplyInsured</div>
                            <p className="mb-4 text-sm text-slate-500">Shown here for consistency only if payroll settings continue to host connected benefit utilities.</p>
                            <Button variant="outline" className="rounded-xl">Connect with SimplyInsured</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
