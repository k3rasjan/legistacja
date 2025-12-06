'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { OnboardingOption } from './OnboardingOption';
import { useUserPreferences } from '@/hooks/useUserPreferences';
import {
  UserPreferences,
  SocialStatus,
  MaritalStatus,
  HousingStatus,
  AgeRange,
  UstawaCategory,
  socialStatusLabels,
  maritalStatusLabels,
  housingStatusLabels,
  ageRangeLabels,
  categoryLabels,
} from '@/types';
import {
  Scale,
  GraduationCap,
  Briefcase,
  Building,
  Users,
  Clock,
  Heart,
  Home,
  Baby,
  UserCheck,
  ArrowRight,
  ArrowLeft,
  Receipt,
  Leaf,
  Car,
  Laptop,
  Wheat,
  Shield,
  HandHeart,
  Palette,
} from 'lucide-react';

const socialStatusIcons: Record<SocialStatus, React.ReactNode> = {
  'student': <GraduationCap className="h-5 w-5" />,
  'employed-private': <Briefcase className="h-5 w-5" />,
  'employed-public': <Building className="h-5 w-5" />,
  'self-employed': <UserCheck className="h-5 w-5" />,
  'unemployed': <Clock className="h-5 w-5" />,
  'retired': <Users className="h-5 w-5" />,
  'homemaker': <Home className="h-5 w-5" />,
};

const categoryIcons: Record<UstawaCategory, React.ReactNode> = {
  'podatki': <Receipt className="h-5 w-5" />,
  'edukacja': <GraduationCap className="h-5 w-5" />,
  'zdrowie': <Heart className="h-5 w-5" />,
  'srodowisko': <Leaf className="h-5 w-5" />,
  'prawo-pracy': <Briefcase className="h-5 w-5" />,
  'mieszkalnictwo': <Home className="h-5 w-5" />,
  'transport': <Car className="h-5 w-5" />,
  'technologia': <Laptop className="h-5 w-5" />,
  'rolnictwo': <Wheat className="h-5 w-5" />,
  'bezpieczenstwo': <Shield className="h-5 w-5" />,
  'pomoc-spoleczna': <HandHeart className="h-5 w-5" />,
  'biznes': <Building className="h-5 w-5" />,
  'kultura': <Palette className="h-5 w-5" />,
  'rodzina': <Users className="h-5 w-5" />,
};

type Step = 'welcome' | 'social' | 'age' | 'marital' | 'housing' | 'children' | 'employer' | 'categories' | 'complete';

const STEPS: Step[] = ['welcome', 'social', 'age', 'marital', 'housing', 'children', 'employer', 'categories', 'complete'];

export function OnboardingFlow() {
  const router = useRouter();
  const { preferences, updatePreferences, completeOnboarding } = useUserPreferences();
  const [currentStep, setCurrentStep] = useState<Step>('welcome');
  const [localPrefs, setLocalPrefs] = useState<Partial<UserPreferences>>({
    socialStatus: preferences.socialStatus,
    maritalStatus: preferences.maritalStatus,
    housingStatus: preferences.housingStatus,
    ageRange: preferences.ageRange,
    hasChildren: preferences.hasChildren,
    isEmployer: preferences.isEmployer,
    categories: preferences.categories || [],
  });

  const currentIndex = STEPS.indexOf(currentStep);
  const progress = ((currentIndex) / (STEPS.length - 1)) * 100;

  const goNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < STEPS.length) {
      setCurrentStep(STEPS[nextIndex]);
    }
  };

  const goBack = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setCurrentStep(STEPS[prevIndex]);
    }
  };

  const handleComplete = () => {
    updatePreferences({ ...localPrefs, onboardingCompleted: true });
    router.push('/');
  };

  const toggleCategory = (category: UstawaCategory) => {
    const current = localPrefs.categories || [];
    const updated = current.includes(category)
      ? current.filter(c => c !== category)
      : [...current, category];
    setLocalPrefs({ ...localPrefs, categories: updated });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Progress bar */}
      {currentStep !== 'welcome' && currentStep !== 'complete' && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-muted">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="flex-1 flex items-center justify-center overflow-y-auto px-6 py-16">
        <div className="w-full max-w-lg">
          {/* Welcome Step */}
          {currentStep === 'welcome' && (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Scale className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-3xl font-bold">Witaj w Legislacji</h1>
              <p className="text-muted-foreground text-lg">
                Śledź proces legislacyjny w Polsce. Odpowiedz na kilka pytań,
                abyśmy mogli dostosować treści do Twoich potrzeb.
              </p>
              <Button size="lg" onClick={goNext} className="w-full">
                Rozpocznij <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="ghost" onClick={handleComplete} className="w-full">
                Pomiń konfigurację
              </Button>
            </div>
          )}

          {/* Social Status Step */}
          {currentStep === 'social' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Jaki jest Twój status zawodowy?</h2>
                <p className="text-muted-foreground">Pomoże nam to dopasować ustawy dotyczące Twojej sytuacji.</p>
              </div>
              <div className="space-y-3">
                {(Object.keys(socialStatusLabels) as SocialStatus[]).map((status) => (
                  <OnboardingOption
                    key={status}
                    label={socialStatusLabels[status]}
                    selected={localPrefs.socialStatus === status}
                    onClick={() => setLocalPrefs({ ...localPrefs, socialStatus: status })}
                    icon={socialStatusIcons[status]}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Age Range Step */}
          {currentStep === 'age' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">W jakim jesteś wieku?</h2>
                <p className="text-muted-foreground">Różne ustawy dotyczą różnych grup wiekowych.</p>
              </div>
              <div className="space-y-3">
                {(Object.keys(ageRangeLabels) as AgeRange[]).map((age) => (
                  <OnboardingOption
                    key={age}
                    label={ageRangeLabels[age]}
                    selected={localPrefs.ageRange === age}
                    onClick={() => setLocalPrefs({ ...localPrefs, ageRange: age })}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Marital Status Step */}
          {currentStep === 'marital' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Jaki jest Twój stan cywilny?</h2>
                <p className="text-muted-foreground">Niektóre ustawy dotyczą spraw rodzinnych.</p>
              </div>
              <div className="space-y-3">
                {(Object.keys(maritalStatusLabels) as MaritalStatus[]).map((status) => (
                  <OnboardingOption
                    key={status}
                    label={maritalStatusLabels[status]}
                    selected={localPrefs.maritalStatus === status}
                    onClick={() => setLocalPrefs({ ...localPrefs, maritalStatus: status })}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Housing Status Step */}
          {currentStep === 'housing' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Jaka jest Twoja sytuacja mieszkaniowa?</h2>
                <p className="text-muted-foreground">Pomaga nam to dopasować ustawy o mieszkalnictwie.</p>
              </div>
              <div className="space-y-3">
                {(Object.keys(housingStatusLabels) as HousingStatus[]).map((status) => (
                  <OnboardingOption
                    key={status}
                    label={housingStatusLabels[status]}
                    selected={localPrefs.housingStatus === status}
                    onClick={() => setLocalPrefs({ ...localPrefs, housingStatus: status })}
                    icon={<Home className="h-5 w-5" />}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Children Step */}
          {currentStep === 'children' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Czy masz dzieci?</h2>
                <p className="text-muted-foreground">Wiele ustaw dotyczy rodzin z dziećmi.</p>
              </div>
              <div className="space-y-3">
                <OnboardingOption
                  label="Tak, mam dzieci"
                  selected={localPrefs.hasChildren === true}
                  onClick={() => setLocalPrefs({ ...localPrefs, hasChildren: true })}
                  icon={<Baby className="h-5 w-5" />}
                />
                <OnboardingOption
                  label="Nie mam dzieci"
                  selected={localPrefs.hasChildren === false}
                  onClick={() => setLocalPrefs({ ...localPrefs, hasChildren: false })}
                  icon={<Users className="h-5 w-5" />}
                />
              </div>
            </div>
          )}

          {/* Employer Step */}
          {currentStep === 'employer' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Czy zatrudniasz pracowników?</h2>
                <p className="text-muted-foreground">Niektóre przepisy dotyczą pracodawców.</p>
              </div>
              <div className="space-y-3">
                <OnboardingOption
                  label="Tak, zatrudniam pracowników"
                  selected={localPrefs.isEmployer === true}
                  onClick={() => setLocalPrefs({ ...localPrefs, isEmployer: true })}
                  icon={<UserCheck className="h-5 w-5" />}
                />
                <OnboardingOption
                  label="Nie zatrudniam"
                  selected={localPrefs.isEmployer === false}
                  onClick={() => setLocalPrefs({ ...localPrefs, isEmployer: false })}
                  icon={<Users className="h-5 w-5" />}
                />
              </div>
            </div>
          )}

          {/* Categories Step */}
          {currentStep === 'categories' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Jakie tematy Cię interesują?</h2>
                <p className="text-muted-foreground">Wybierz kategorie ustaw, które chcesz śledzić.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {(Object.keys(categoryLabels) as UstawaCategory[]).map((category) => (
                  <OnboardingOption
                    key={category}
                    label={categoryLabels[category]}
                    selected={(localPrefs.categories || []).includes(category)}
                    onClick={() => toggleCategory(category)}
                    icon={categoryIcons[category]}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Complete Step */}
          {currentStep === 'complete' && (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <Scale className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold">Gotowe!</h1>
              <p className="text-muted-foreground text-lg">
                Twoje preferencje zostały zapisane. Teraz zobaczysz ustawy
                dopasowane do Twoich zainteresowań.
              </p>
              <Button size="lg" onClick={handleComplete} className="w-full">
                Rozpocznij korzystanie
              </Button>
            </div>
          )}

          {/* Navigation buttons */}
          {currentStep !== 'welcome' && currentStep !== 'complete' && (
            <div className="flex gap-3 mt-8">
              <Button variant="outline" onClick={goBack} className="flex-1">
                <ArrowLeft className="mr-2 h-4 w-4" /> Wstecz
              </Button>
              <Button onClick={goNext} className="flex-1">
                Dalej <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
