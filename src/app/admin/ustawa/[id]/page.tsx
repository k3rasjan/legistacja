'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UstawaAvatar } from '@/components/ustawa/UstawaAvatar';
import { mockUstawy, mockConsultations, mockAICommentSummaries, mockConsultationStats } from '@/data/mock';
import { categoryLabels, statusLabels } from '@/types';
import {
  ArrowLeft,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from 'recharts';

const SENTIMENT_COLORS = {
  positive: '#404040',
  neutral: '#a3a3a3',
  negative: '#737373',
  mixed: '#525252',
};

const CHART_COLORS = {
  primary: '#171717',
  secondary: '#525252',
  tertiary: '#a3a3a3',
  grid: '#e5e5e5',
  line: '#404040',
  bar: '#262626',
};

export default function AdminUstawaPage() {
  const params = useParams();
  const id = params.id as string;

  const ustawa = mockUstawy.find((u) => u.id === id);

  if (!ustawa) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Nie znaleziono ustawy</h1>
          <Link href="/">
            <Button>Wróć do strony głównej</Button>
          </Link>
        </div>
      </div>
    );
  }

  const consultations = mockConsultations.filter((c) => c.ustawaId === id);
  const hasConsultations = consultations.length > 0;

  // Get stats and AI summaries for all consultations of this ustawa
  const consultationData = consultations.map((consultation) => ({
    consultation,
    stats: mockConsultationStats[consultation.id],
    aiSummaries: mockAICommentSummaries[consultation.id] || [],
  }));

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href={`/ustawa/${id}`}>
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <UstawaAvatar shortTitle={ustawa.shortTitle} status={ustawa.status} size="md" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-lg truncate">{ustawa.shortTitle}</h1>
                <Badge variant="outline" className="shrink-0">Admin</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{statusLabels[ustawa.status]}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 pb-16">
        {/* Ustawa Info */}
        <div className="mb-8 p-6 bg-card border border-border rounded-xl">
          <h2 className="text-xl font-bold mb-2">{ustawa.title}</h2>
          <p className="text-muted-foreground mb-4">{ustawa.description}</p>
          <div className="flex flex-wrap gap-2">
            {ustawa.categories.map((category) => (
              <Badge key={category} variant="secondary">
                {categoryLabels[category]}
              </Badge>
            ))}
          </div>
        </div>

        {/* Consultations Section */}
        {!hasConsultations ? (
          <div className="text-center py-16 bg-card border border-border rounded-xl">
            <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">Brak konsultacji</h2>
            <p className="text-muted-foreground">
              Ta ustawa nie ma jeszcze żadnych konsultacji społecznych.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {consultationData.map(({ consultation, stats, aiSummaries }) => (
              <div key={consultation.id} className="bg-card border border-border rounded-xl overflow-hidden">
                {/* Consultation Header */}
                <div className="p-6 border-b border-border">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare className="h-5 w-5 text-primary" />
                        <h2 className="text-lg font-bold">{consultation.title}</h2>
                        {consultation.isActive && (
                          <Badge className="bg-green-500">Aktywna</Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {new Date(consultation.startDate).toLocaleDateString('pl-PL')} - {new Date(consultation.endDate).toLocaleDateString('pl-PL')}
                      </p>
                    </div>
                    <Link href={`/konsultacje/${consultation.id}`}>
                      <Button variant="outline" size="sm">
                        Zobacz konsultacje
                      </Button>
                    </Link>
                  </div>
                </div>

                {stats && (
                  <>
                    {/* Stats Overview */}
                    <div className="grid grid-cols-4 gap-6 p-8 border-b border-border">
                      <div className="text-center p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900">
                        <span className="text-3xl font-bold tracking-tight">{stats.totalComments}</span>
                        <p className="text-sm text-muted-foreground mt-1">Wszystkich</p>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-neutral-100 dark:bg-neutral-800">
                        <span className="text-3xl font-bold tracking-tight">{stats.positiveComments}</span>
                        <p className="text-sm text-muted-foreground mt-1">Pozytywnych</p>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-neutral-200 dark:bg-neutral-700">
                        <span className="text-3xl font-bold tracking-tight">{stats.neutralComments}</span>
                        <p className="text-sm text-muted-foreground mt-1">Neutralnych</p>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-neutral-300 dark:bg-neutral-600">
                        <span className="text-3xl font-bold tracking-tight">{stats.negativeComments}</span>
                        <p className="text-sm text-muted-foreground mt-1">Negatywnych</p>
                      </div>
                    </div>

                    {/* Charts Grid */}
                    <div className="grid grid-cols-2 gap-8 p-8 border-b border-border">
                      {/* Sentiment Pie Chart */}
                      <div className="rounded-2xl p-6 bg-neutral-50 dark:bg-neutral-900">
                        <h3 className="font-medium text-sm uppercase tracking-wide text-muted-foreground mb-6">
                          Rozkład sentymentu
                        </h3>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={[
                                  { name: 'Pozytywne', value: stats.positiveComments },
                                  { name: 'Neutralne', value: stats.neutralComments },
                                  { name: 'Negatywne', value: stats.negativeComments },
                                ]}
                                cx="50%"
                                cy="50%"
                                innerRadius={70}
                                outerRadius={100}
                                paddingAngle={3}
                                dataKey="value"
                                strokeWidth={0}
                              >
                                <Cell fill={CHART_COLORS.primary} />
                                <Cell fill={CHART_COLORS.tertiary} />
                                <Cell fill={CHART_COLORS.secondary} />
                              </Pie>
                              <Tooltip
                                contentStyle={{
                                  backgroundColor: '#171717',
                                  border: 'none',
                                  borderRadius: '8px',
                                  padding: '8px 12px',
                                }}
                                itemStyle={{ color: '#fff' }}
                                labelStyle={{ color: '#a3a3a3', marginBottom: '4px' }}
                              />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="flex justify-center gap-6 mt-4">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: CHART_COLORS.primary }} />
                            <span className="text-sm text-muted-foreground">Pozytywne</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: CHART_COLORS.tertiary }} />
                            <span className="text-sm text-muted-foreground">Neutralne</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: CHART_COLORS.secondary }} />
                            <span className="text-sm text-muted-foreground">Negatywne</span>
                          </div>
                        </div>
                      </div>

                      {/* Responses by Day Line Chart */}
                      <div className="rounded-2xl p-6 bg-neutral-50 dark:bg-neutral-900">
                        <h3 className="font-medium text-sm uppercase tracking-wide text-muted-foreground mb-6">
                          Odpowiedzi w czasie
                        </h3>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={stats.responsesByDay}>
                              <CartesianGrid strokeDasharray="0" stroke={CHART_COLORS.grid} vertical={false} />
                              <XAxis
                                dataKey="date"
                                tick={{ fontSize: 11, fill: '#737373' }}
                                tickFormatter={(value) => new Date(value).toLocaleDateString('pl-PL', { day: 'numeric', month: 'short' })}
                                axisLine={false}
                                tickLine={false}
                              />
                              <YAxis
                                tick={{ fontSize: 11, fill: '#737373' }}
                                axisLine={false}
                                tickLine={false}
                              />
                              <Tooltip
                                labelFormatter={(value) => new Date(value).toLocaleDateString('pl-PL')}
                                formatter={(value: number) => [value, 'Odpowiedzi']}
                                contentStyle={{
                                  backgroundColor: '#171717',
                                  border: 'none',
                                  borderRadius: '8px',
                                  padding: '8px 12px',
                                }}
                                itemStyle={{ color: '#fff' }}
                                labelStyle={{ color: '#a3a3a3', marginBottom: '4px' }}
                              />
                              <Line
                                type="monotone"
                                dataKey="count"
                                stroke={CHART_COLORS.primary}
                                strokeWidth={2}
                                dot={{ fill: CHART_COLORS.primary, strokeWidth: 0, r: 4 }}
                                activeDot={{ r: 6, fill: CHART_COLORS.primary }}
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>

                    {/* Top Concerns Bar Chart */}
                    <div className="p-8 border-b border-border">
                      <h3 className="font-medium text-sm uppercase tracking-wide text-muted-foreground mb-6">
                        Najczęstsze tematy
                      </h3>
                      <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={stats.topConcerns} layout="vertical" barCategoryGap="20%">
                            <CartesianGrid strokeDasharray="0" stroke={CHART_COLORS.grid} horizontal={false} />
                            <XAxis
                              type="number"
                              tick={{ fontSize: 11, fill: '#737373' }}
                              axisLine={false}
                              tickLine={false}
                            />
                            <YAxis
                              type="category"
                              dataKey="topic"
                              tick={{ fontSize: 12, fill: '#525252' }}
                              width={160}
                              axisLine={false}
                              tickLine={false}
                            />
                            <Tooltip
                              formatter={(value: number) => [value, 'Wzmianki']}
                              contentStyle={{
                                backgroundColor: '#171717',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '8px 12px',
                              }}
                              itemStyle={{ color: '#fff' }}
                              labelStyle={{ color: '#a3a3a3', marginBottom: '4px' }}
                              cursor={{ fill: 'transparent' }}
                            />
                            <Bar
                              dataKey="count"
                              fill={CHART_COLORS.bar}
                              radius={[0, 6, 6, 0]}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </>
                )}

                {/* AI Comment Summaries */}
                {aiSummaries.length > 0 && (
                  <div className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-amber-500" />
                      Podsumowania AI komentarzy
                    </h3>
                    <div className="grid gap-4">
                      {aiSummaries.map((summary) => (
                        <div
                          key={summary.id}
                          className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200 dark:border-amber-800 rounded-lg"
                        >
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <div>
                              <h4 className="font-semibold text-amber-900 dark:text-amber-100">
                                {summary.title}
                              </h4>
                              <p className="text-sm text-amber-700 dark:text-amber-300">
                                Na podstawie {summary.commentCount} komentarzy
                              </p>
                            </div>
                            <Badge
                              style={{
                                backgroundColor: SENTIMENT_COLORS[summary.sentiment],
                                color: 'white'
                              }}
                            >
                              {summary.sentiment === 'positive' && 'Pozytywny'}
                              {summary.sentiment === 'neutral' && 'Neutralny'}
                              {summary.sentiment === 'negative' && 'Negatywny'}
                              {summary.sentiment === 'mixed' && 'Mieszany'}
                            </Badge>
                          </div>
                          <p className="text-amber-800 dark:text-amber-200 mb-3">
                            {summary.summary}
                          </p>
                          <div className="space-y-1">
                            <p className="text-sm font-medium text-amber-900 dark:text-amber-100">
                              Kluczowe punkty:
                            </p>
                            <ul className="text-sm text-amber-800 dark:text-amber-200 space-y-1">
                              {summary.keyPoints.map((point, idx) => (
                                <li key={idx} className="flex gap-2">
                                  <span className="text-amber-500">•</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
